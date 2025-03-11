import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: integer('id').primaryKey(),
	username: text('username').unique().notNull(),
	passwordHash: text('password_hash').notNull()
});

export const tasks = sqliteTable('tasks', {
	id: integer('id').primaryKey(),
	userId: integer('user_id')
		.notNull()
		.references(() => users.id),
	title: text('title').notNull(),
	description: text('description'),
	status: text('status').notNull()
});
