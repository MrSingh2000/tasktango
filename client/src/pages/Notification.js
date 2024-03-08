import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, showToast, useUpdate } from "../helpers";
import axios from "axios";
import { updateUserDetails } from "../redux/reducers/userDetailsSlice";

function ListItem(props) {
  const { invitation } = props;
  const invitationDate = new Date(Number(invitation.date));
  const [getUserNtasksUpdate] = useUpdate();
  const user = useSelector((store) => store.user);
  const [invitationOwner, setInvitationOwner] = useState(null);
  const [invitationTask, setInvitationTask] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUserById(invitation.from, user.authToken);
        setInvitationOwner(response);

        const res = await axios({
          url: `${process.env.REACT_APP_HOST}/api/task/get/${invitation.task}`,
          method: "GET",
          headers: {
            authToken: user.authToken,
          },
        });
        console.log("res: ", res);
        setInvitationTask(res.data.data.title || res.data.data.task.title);
      } catch (error) {
        console.log("error: ", error);
        showToast("Some error occurred. Please refresh the page.", "error");
      }
    };

    getData();
  }, []);

  const handleInviteAccept = async () => {
    try {
      await axios({
        url: `${process.env.REACT_APP_HOST}/api/collab/add`,
        method: "POST",
        headers: {
          authToken: user.authToken,
        },
        data: {
          collabId: invitation._id,
          taskId: invitation.task
        },
      });
      await getUserNtasksUpdate();
      showToast("Task accepted.", "success");
    } catch (error) {
      showToast(error.response.data.error.message, "error");
    }
  };

  return invitationOwner && invitationTask ? (
    <tr>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              alt="profil"
              src={invitationOwner.img || profileImg}
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {invitationOwner.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{invitationTask}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{`${invitationDate.getDate()}-${
          invitationDate.getMonth() + 1
        }-${invitationDate.getFullYear()}`}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 rounded-full opacity-50"
          ></span>
          <span className="relative">
            {invitation.status ? "active" : "inactive"}
          </span>
        </span>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <button
          onClick={handleInviteAccept}
          class={`py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform ${
            invitation.status
              ? "bg-red-400"
              : "bg-custom-yellow hover:bg-[#e4a812] focus:ring-custom-yellow"
          } lg:px-10 rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 `}
        >
          {invitation.status ? "Accepted" : "Accept"}
        </button>
      </td>
    </tr>
  ) : (
    <tr>
      <div class="h-12 rounded-md w-full mx-4">
        <div class="flex flex-row items-center justify-center h-full space-x-5 animate-pulse w-full">
          <div class="flex flex-col space-y-3 w-full">
            <div class="h-6 w-full bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </tr>
  );
}

function Notification(props) {
  const userDetails = useSelector((store) => store.userDetails);

  return (
    <div className="h-[calc(100vh-4rem)] dark:bg-gray-700 ">
      {userDetails.invitationid.length > 0 ? (
        <div className="container w-full px-4 mx-auto sm:px-8">
          <div className="py-8">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Owner
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Task
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Created at
                      </th>
                      <th
                        scope="col"
                        className="hidden md:table-cell px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className="hidden md:table-cell px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userDetails.invitationid.map((invitation, index) => {
                      return <ListItem key={index} invitation={invitation} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <p className="text-lg font-semibold">No new notifications.</p>
        </div>
      )}
    </div>
  );
}

export default Notification;
