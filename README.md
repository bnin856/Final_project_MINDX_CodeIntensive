# Todo App

A React-based Todo application with tab navigation and task management features.

## Features

### Tab Navigation
- **All**: Shows all tasks (active and completed)
- **Active**: Shows only active tasks
- **Completed**: Shows only completed tasks

### Task Management
- Add new tasks (only available in All and Active tabs)
- Toggle task completion status with checkbox
- Visual feedback with strikethrough for completed tasks
- Delete individual completed tasks (only in Completed tab)
- Delete all completed tasks at once (only in Completed tab)

### Design
- Clean, modern interface
- Responsive design for mobile and desktop
- Smooth transitions and hover effects
- Tab-based navigation with active state indicators

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Adding Tasks**: Switch to "All" or "Active" tab and use the form to add new tasks
2. **Completing Tasks**: Check the checkbox next to any task to mark it as completed
3. **Viewing Tasks**: Use the tabs to filter between all, active, and completed tasks
4. **Deleting Tasks**: In the "Completed" tab, you can delete individual tasks or all completed tasks at once

## Requirements Met

✅ **Design Interface (3đ)**: Clean, modern design with tab navigation
✅ **Tab Functionality**: All, Active, and Completed tabs with proper filtering
✅ **Add Task Function**: Available only in All and Active tabs
✅ **Delete Task Function**: Individual and bulk delete in Completed tab only
✅ **Task Toggle**: Checkbox to toggle between active/completed with visual feedback
