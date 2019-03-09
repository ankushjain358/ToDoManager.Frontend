export class AppConstants {
    public static AppName = 'ToDo Manager';
    public static ApiBaseUrl = 'https://localhost:44359/';
    // public static ApiBaseUrl = 'https://todomanagerapp.azurewebsites.net/';
    public static LoginAPIUrl = AppConstants.ApiBaseUrl + 'api/account/login';
    public static RegistrationAPIUrl = AppConstants.ApiBaseUrl + 'api/account/register';
    public static CategoryListAPIUrl = AppConstants.ApiBaseUrl + 'api/categories/list';
    public static CreateCategoryAPIUrl = AppConstants.ApiBaseUrl + 'api/categories/create';
    public static CategoryDetailAPIUrl = AppConstants.ApiBaseUrl + 'api/categories/detail';
    public static CreateTaskAPIUrl = AppConstants.ApiBaseUrl + 'api/tasks/create';
    

    public static LocalStorageKey = {
        User: 'currentUser'
    };
}