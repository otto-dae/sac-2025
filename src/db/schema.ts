import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const students = pgTable("students", {
  expediente: integer().primaryKey(),
  nombre: varchar({ length: 100 }).notNull(),
});

export const studentRelations = relations(students, ({ many }) => ({
  studentsToWorkshops: many(studentsToWorkshops),
}));

export const workshops = pgTable("workshops", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  nombre: varchar({ length: 100 }).notNull(),
  date: timestamp({ mode: "string" }).notNull(),
});

export const workshopRelations = relations(workshops, ({ many }) => ({
  studentsToWorkshops: many(studentsToWorkshops),
}));

export const studentsToWorkshops = pgTable("attendance", {
  studentId: integer().notNull().references(() => students.expediente),
  workshopId: integer().notNull().references(() => workshops.id),
  registerTime: timestamp({ mode: "string", }).notNull().default("now()"),
});

export const studentsToWorkshopsRelations = relations(studentsToWorkshops, ({ one }) => ({
  student: one(students),
  workshop: one(workshops),
}));
