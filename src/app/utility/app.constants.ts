export class AppConstants {
    public static AppName = 'ToDo Manager';
    // public static ApiBaseUrl = 'https://localhost:44359/';
    public static ApiBaseUrl = 'https://todomanagerapp.azurewebsites.net/';
    public static LoginAPIUrl = AppConstants.ApiBaseUrl + 'api/account/login';
    public static RegistrationAPIUrl = AppConstants.ApiBaseUrl + 'api/account/register';
    public static CategoryListAPIUrl = AppConstants.ApiBaseUrl + 'api/categories/list';
    public static CreateCategoryAPIUrl = AppConstants.ApiBaseUrl + 'api/categories/create';
    public static UpdateCategoryAPIUrl = AppConstants.ApiBaseUrl + 'api/categories/update';
    public static DeleteCategoryAPIUrl = AppConstants.ApiBaseUrl + 'api/categories/delete';
    public static CategoryDetailAPIUrl = AppConstants.ApiBaseUrl + 'api/categories/detail';
    public static CreateTaskAPIUrl = AppConstants.ApiBaseUrl + 'api/tasks/create';
    public static UpdateTaskAPIUrl = AppConstants.ApiBaseUrl + 'api/tasks/update';
    public static UpdateTaskStatusAPIUrl = AppConstants.ApiBaseUrl + 'api/tasks/update-task-status';
    public static DeleteTaskAPIUrl = AppConstants.ApiBaseUrl + 'api/tasks/delete-task';


    public static LocalStorageKey = {
        User: 'currentUser'
    };
}
