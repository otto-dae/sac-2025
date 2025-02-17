CREATE TABLE "students" (
	"expediente" integer PRIMARY KEY NOT NULL,
	"nombre" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "attendance" (
	"studentId" integer NOT NULL,
	"workshopId" integer NOT NULL,
	"registerTime" timestamp DEFAULT 'now()' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "workshops" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "workshops_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"nombre" varchar(100) NOT NULL,
	"date" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_studentId_students_expediente_fk" FOREIGN KEY ("studentId") REFERENCES "public"."students"("expediente") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_workshopId_workshops_id_fk" FOREIGN KEY ("workshopId") REFERENCES "public"."workshops"("id") ON DELETE no action ON UPDATE no action;