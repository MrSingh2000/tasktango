import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";
import { IoIosClose } from "react-icons/io";
import { getMultipleUsersById, getUser, showToast } from "../helpers";
import { useDispatch, useSelector } from "react-redux";
import { TiUserAddOutline } from "react-icons/ti";
import axios from "axios";
import { updateLoading } from "../redux/reducers/loadingSlice";

function Collabs(props) {
  const { showmodal, setShowmodal } = props;
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [collabData, setCollabData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [collabUser, setCollabUser] = useState(null);

  const handleSendInvitation = async () => {
    if (!user.authToken || !collabUser) return;
    try {
      dispatch(updateLoading(true));
      await axios({
        url: `${process.env.REACT_APP_HOST}/api/collab/notify`,
        method: "POST",
        headers: {
          authToken: user.authToken,
        },
        data: {
          collabId: collabUser._id,
          taskId: showmodal.data._id
        },
      });
      dispatch(updateLoading(false));
      showToast("Collaboration request sent.", "success");
    } catch (error) {
      dispatch(updateLoading(false));
      showToast(error.response.data.error.message, "error");
    }
  };

  useEffect(() => {
    const getSearch = async () => {
      if (!search) {
        setSearchResults([]);
        return;
      }
      try {
        const response = await getUser(search, user.authToken);
        setSearchResults([...response]);
      } catch (err) {
        showToast(err, "Error");
      }
    };
    getSearch();
  }, [search]);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("sho: ", showmodal.data, " uth: ", user.authToken);
        const data = await getMultipleUsersById(
          showmodal.data.collab,
          user.authToken
        );
        console.log("data: ", data);
        setCollabData(data);
      } catch (error) {
        showToast("Some error occurred. Please refresh the page.", "error");
      }
    };

    getData();
  }, []);

  return (
    <div className="justify-center dark:bg-gray-700 items-center flex fixed inset-0 z-10 outline-none focus:outline-none h-100vh w-100vw bg-transparent backdrop-blur-sm">
      <div className="bg-transparent backdrop-blur-sm z-10 outline-none focus:outline-none w-5/6 md:w-4/5 lg:w-1/2 h-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-row items-center justify-between mb-4">
          <h5 className="text-xl cursor-pointer hover:text-custom-yellow font-bold leading-none text-gray-900 dark:text-white">
            Task Collaborators
          </h5>
          <IoIosClose
            onClick={() => {
              setShowmodal({
                visible: false,
                data: null,
              });
            }}
            className="dark:text-white h-8 w-8 hover:text-custom-yellow cursor-pointer"
          />
        </div>
        {/* add collaborators */}
        <div className="flex justify-center items-center p-2 w-full">
          <input
            type="text"
            id="rounded-email"
            className="rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 h-fit focus:ring-custom-yellow focus:border-transparent"
            placeholder="Add collab. by username/email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            onClick={handleSendInvitation}
            className="p-1 w-fit border border-opacity-50 border-custom-yellow rounded-full hover:scale-110 m-2 transition-all cursor-pointer"
          >
            <TiUserAddOutline size={45} className="text-custom-yellow" />
          </div>
        </div>

        <div className="absolute top-40 left-12 w-60 mt-2 origin-top-right bg-white rounded-lg shadow-lg dark:bg-gray-800 z-50">
          {searchResults.map((user, index) => {
            return (
              <div key={index}>
                <button
                  type="button"
                  className="bg-white dark:bg-gray-800 shadow-sm flex items-center justify-start gap-3 w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-100"
                  id="options-menu"
                  onClick={() => {
                    setCollabUser(user);
                    setSearch(user.email);
                  }}
                >
                  <span>
                    <img
                      className="w-8"
                      src={user.img || profileImg}
                      alt="profile"
                    />
                  </span>
                  <span className="flex flex-col items-start">
                    <span>{user.username}</span>
                    <span className="text-xs font-base text-gray-400">
                      {user.name}
                    </span>
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* collaborators list */}
        <div className="flow-root">
          {collabData ? (
            <ul className="grid md:grid-cols-2  grid-cols-1 grid-rows-auto overflow-y-auto  max-h-72">
              {" "}
              {collabData.map((user) => {
                return (
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-12 h-12 rounded-full dark:bg-white bg-custom-yellow"
                          src={user.img || profileImg}
                          alt="profile"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <>
              <div className="text-semibold text-xs italic">
                No collaborators
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Collabs;
