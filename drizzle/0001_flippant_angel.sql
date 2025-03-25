ALTER TABLE "workshop" RENAME TO "workshops";--> statement-breakpoint
ALTER TABLE "attendance" DROP CONSTRAINT "attendance_workshopId_workshop_id_fk";
--> statement-breakpoint
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_workshopId_workshops_id_fk" FOREIGN KEY ("workshopId") REFERENCES "public"."workshops"("id") ON DELETE no action ON UPDATE no action;
