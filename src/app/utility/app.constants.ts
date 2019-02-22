export class AppConstants {
    public static AppName = 'ToDo Manager';
    public static ApiBaseUrl = 'https://localhost:44359/';
    public static LoginAPIUrl = AppConstants.ApiBaseUrl + 'api/account/login';
    public static TaskListAPIUrl = AppConstants.ApiBaseUrl + 'api/tasks/list';
    public static CreateTaskListAPIUrl = AppConstants.ApiBaseUrl + 'api/tasks/create';

    public static LocalStorageKey = {
        User: 'currentUser'
    };
}