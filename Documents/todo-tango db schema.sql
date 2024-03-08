CREATE TABLE IF NOT EXISTS "Sub_Task" (
	"id" int NOT NULL UNIQUE DEFAULT '',
	"owner" int NOT NULL,
	"collaborator" int NOT NULL DEFAULT '',
	"title" string NOT NULL UNIQUE DEFAULT '',
	"desc" string NOT NULL DEFAULT '',
	"status" binary NOT NULL DEFAULT 'False',
	"deadline" datetime NOT NULL DEFAULT '',
	"created" datetime NOT NULL DEFAULT '',
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "User" (
	"id" int NOT NULL UNIQUE DEFAULT '',
	"name" string NOT NULL DEFAULT '',
	"username" varchar(255) NOT NULL UNIQUE DEFAULT '',
	"email" text NOT NULL UNIQUE DEFAULT '',
	"Password" string NOT NULL DEFAULT '',
	"Img" string NOT NULL DEFAULT '',
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "UserData" (
	"id" int NOT NULL UNIQUE DEFAULT '',
	"user_id" int NOT NULL,
	"my_task" string NOT NULL DEFAULT '',
	"collab_task" string NOT NULL DEFAULT '',
	"invitation" string NOT NULL DEFAULT '',
	"history" string NOT NULL DEFAULT '',
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Task" (
	"id" int NOT NULL UNIQUE DEFAULT '',
	"owner" string NOT NULL,
	"collaborators" string NOT NULL DEFAULT '',
	"title" string NOT NULL UNIQUE DEFAULT '',
	"desc" string NOT NULL DEFAULT '',
	"status" binary NOT NULL DEFAULT 'False',
	"deadline" datetime NOT NULL DEFAULT '',
	"created" datetime NOT NULL DEFAULT '',
	"progress" int NOT NULL DEFAULT '',
	"subtask" int NOT NULL DEFAULT '',
	"is_subtask" boolean NOT NULL DEFAULT '',
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Invitations" (
	"id" int NOT NULL UNIQUE DEFAULT '',
	"from" string NOT NULL DEFAULT '',
	"task" string NOT NULL DEFAULT '',
	"date" datetime NOT NULL DEFAULT '',
	"status" boolean NOT NULL DEFAULT '',
	PRIMARY KEY ("id")
);

ALTER TABLE "Sub_Task" ADD CONSTRAINT "Sub_Task_fk1" FOREIGN KEY ("owner") REFERENCES "User"("id");

ALTER TABLE "Sub_Task" ADD CONSTRAINT "Sub_Task_fk2" FOREIGN KEY ("collaborator") REFERENCES "User"("id");

ALTER TABLE "UserData" ADD CONSTRAINT "UserData_fk1" FOREIGN KEY ("user_id") REFERENCES "User"("id");

ALTER TABLE "UserData" ADD CONSTRAINT "UserData_fk2" FOREIGN KEY ("my_task") REFERENCES "Task"("id");

ALTER TABLE "UserData" ADD CONSTRAINT "UserData_fk3" FOREIGN KEY ("collab_task") REFERENCES "Task"("id");

ALTER TABLE "UserData" ADD CONSTRAINT "UserData_fk4" FOREIGN KEY ("invitation") REFERENCES "Invitations"("id");

ALTER TABLE "UserData" ADD CONSTRAINT "UserData_fk5" FOREIGN KEY ("history") REFERENCES "Task"("id");
ALTER TABLE "Task" ADD CONSTRAINT "Task_fk1" FOREIGN KEY ("owner") REFERENCES "User"("id");

ALTER TABLE "Task" ADD CONSTRAINT "Task_fk2" FOREIGN KEY ("collaborators") REFERENCES "User"("id");

ALTER TABLE "Task" ADD CONSTRAINT "Task_fk9" FOREIGN KEY ("subtask") REFERENCES "Sub_Task"("id");
ALTER TABLE "Invitations" ADD CONSTRAINT "Invitations_fk1" FOREIGN KEY ("from") REFERENCES "User"("id");

ALTER TABLE "Invitations" ADD CONSTRAINT "Invitations_fk2" FOREIGN KEY ("task") REFERENCES "Task"("id");