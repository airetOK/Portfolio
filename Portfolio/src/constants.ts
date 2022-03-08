export class Constants {
    static ua_about : string  = 'Про себе';
    static ua_title : string  = 'Сергій Безрукавий';
    static ua_contacts : string = 'Контакти';
    static ua_education : string  = 'Освіта';
    static ua_technologies : string = 'Технології';
    static ua_experience : string = 'Стаж';
    static ua_download : string = 'Завантажити CV';
    static eng_about : string  = 'About me';
    static eng_title : string  = 'Serhiy Bezrukaviy';
    static eng_contacts : string = 'Contacts';
    static eng_education : string  = 'Education';
    static eng_technologies : string = 'Technologies';
    static eng_experience : string = 'Experience';
    static eng_download : string = 'Download CV';
    static aboutDataEng : string = 'Goal-oriented Software Engineer with experience in back-end and front-end development.' +
    ' I’m self-disciplined, responsible and motivated in improvement my skills, opened for the new technologies. I like to find the best solutions and practices in resolving issues and tasks, using logical and creative approaches to reach the best solutions.' +
    ' I’m ready for the challenges, hard and productive work, this motivates me to grow professionally and obtain the unique experience.' + 
    ' Able to work independently or as a part of development team.';
    static contactDataEng : string = 'contacts contacts contacts contacts contacts contacts';
    static educationDataEng : string = 'education education education education';
    static technologiesDataEng : string = 'technologies technologies technologies \n' + 'technologies technologies technologies';
    static experienceDataEng : string = 'experience experience experience';
    static aboutDataUa : string = 'Цілеспрямований інженер-програміст з досвідом розробки back-end та front-end.' +
    ' Я самодисциплінований, відповідальний і мотивований у вдосконаленні своїх навичок, відкритий для нових технологій. Мені подобається знаходити найкращі рішення та практики у вирішенні проблем і завдань, використовуючи логічні та творчі підходи для досягнення найкращих рішень.' +
    ' Я готовий до викликів, наполегливої ​​та продуктивної роботи, це мотивує мене розвиватися професійно та отримувати унікальний досвід.' +
    ' Здатний працювати самостійно або в складі команди розробників.';
    static contactDataUa : string = 'контакти контакти контакти контакти контакти контакти';
    static educationDataUa : string = 'освіта освіта освіта освіта';
    static technologiesDataUa : string = 'технології технології технології \n' + 'технології технології технології';
    static experienceDataUa : string = 'досвід досвід досвід';
    static paramMap : Map<string, string> = new Map();
     static {
         Constants.paramMap.set('eng_about', Constants.aboutDataEng);
         Constants.paramMap.set('eng_contacts', Constants.contactDataEng);
         Constants.paramMap.set('eng_education', Constants.educationDataEng);
         Constants.paramMap.set('eng_technologies', Constants.technologiesDataEng);
         Constants.paramMap.set('eng_experience', Constants.experienceDataEng);
         Constants.paramMap.set('ua_about', Constants.aboutDataUa);
         Constants.paramMap.set('ua_contacts', Constants.contactDataUa);
         Constants.paramMap.set('ua_education', Constants.educationDataUa);
         Constants.paramMap.set('ua_technologies', Constants.technologiesDataUa);
         Constants.paramMap.set('ua_experience', Constants.experienceDataUa);
     }
}