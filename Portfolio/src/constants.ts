export class Constants {
    static about : string  = 'Про себе';
    static title : string  = 'Сергій Безрукавий';
    static contacts : string = 'Контакти';
    static education : string  = 'Освіта';
    static technologies : string = 'Технології';
    static experience : string = 'Стаж';
    static download : string = 'Завантажити CV';
    static aboutData : string = 'Sample data. Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.Sample data. \n' +
    'Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.' +
    'Sample data. Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.Sample data. \n' +
    'Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.Sample data.';
    static contactData : string = 'contacts contacts contacts contacts contacts contacts';
    static educationData : string = 'education education education education';
    static technologiesData : string = 'technologies technologies technologies \n' + 'technologies technologies technologies';
    static experienceData : string = 'experience experience experience';
    static paramMap : Map<string, string> = new Map();
     static {
         Constants.paramMap.set('about', Constants.aboutData);
         Constants.paramMap.set('contacts', Constants.contactData);
         Constants.paramMap.set('education', Constants.educationData);
         Constants.paramMap.set('technologies', Constants.technologiesData);
         Constants.paramMap.set('experience', Constants.experienceData);
     }
}