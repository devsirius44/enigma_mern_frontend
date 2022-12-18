import _ from "lodash";
import dayjs from "dayjs";

const imageAssets = import.meta.globEager(
  `/src/assets/images/*.{jpg,jpeg,png,svg}`
);
const fakers = {
  fakeUsers() {
    const users = [
      { name: "Johnny Depp", gender: "male" },
      { name: "Al Pacino", gender: "male" },
      { name: "Robert De Niro", gender: "male" },
      { name: "Kevin Spacey", gender: "male" },
      { name: "Denzel Washington", gender: "male" },
      { name: "Russell Crowe", gender: "male" },
      { name: "Brad Pitt", gender: "male" },
      { name: "Angelina Jolie", gender: "female" },
      { name: "Leonardo DiCaprio", gender: "male" },
      { name: "Tom Cruise", gender: "male" },
      { name: "John Travolta", gender: "male" },
      { name: "Arnold Schwarzenegger", gender: "male" },
      { name: "Sylvester Stallone", gender: "male" },
      { name: "Kate Winslet", gender: "female" },
      { name: "Christian Bale", gender: "male" },
      { name: "Morgan Freeman", gender: "male" },
      { name: "Keanu Reeves", gender: "male" },
      { name: "Nicolas Cage", gender: "male" },
      { name: "Hugh Jackman", gender: "male" },
      { name: "Edward Norton", gender: "male" },
      { name: "Bruce Willis", gender: "male" },
      { name: "Tom Hanks", gender: "male" },
      { name: "Charlize Theron", gender: "female" },
      { name: "Will Smith", gender: "male" },
      { name: "Sean Connery", gender: "male" },
      { name: "Keira Knightley", gender: "female" },
      { name: "Vin Diesel", gender: "male" },
      { name: "Matt Damon", gender: "male" },
      { name: "Richard Gere", gender: "male" },
      { name: "Catherine Zeta-Jones", gender: "female" },
    ];

    return _.sampleSize(users, 3).map((user) => {
      return {
        name: user.name,
        gender: user.gender,
        email: _.toLower(_.replace(user.name, / /g, "") + "@left4code.com"),
      };
    });
  },
  fakeProjects() {
    const projects = [
      "Video Calling APP",
      "Project Managment",
      "Content Managment",
      "Building Official Website",
      "Mobile Develping",
    ];
    return _.sampleSize(projects, 5);
  },
  fakePhotos() {
    const photos = [];
    for (let i = 0; i < 15; i++) {
      photos[photos.length] =
        imageAssets[
          "/src/assets/images/profile-" + _.random(1, 15) + ".jpg"
        ].default;
    }
    return _.sampleSize(photos, 10);
  },
  fakeImages() {
    const images = [];
    for (let i = 0; i < 15; i++) {
      images[images.length] =
        imageAssets[
          "/src/assets/images/preview-" + _.random(1, 15) + ".jpg"
        ].default;
    }
    return _.sampleSize(images, 10);
  },
  fakeDates() {
    const dates = [];
    for (let i = 0; i < 5; i++) {
      dates[dates.length] = dayjs
        .unix(_.random(1586584776897, 1672333200000) / 1000)
        .format("D/MM/YYYY");
    }
    return _.sampleSize(dates, 3);
  },
  fakeTimes() {
    const times = [
      "01:10 PM",
      "05:09 AM",
      "06:05 AM",
      "03:20 PM",
      "04:50 AM",
      "07:00 PM",
    ];
    return _.sampleSize(times, 3);
  },
  fakeFormattedTimes() {
    const times = [
      _.random(10, 60) + " seconds ago",
      _.random(10, 60) + " minutes ago",
      _.random(10, 24) + " hours ago",
      _.random(10, 20) + " days ago",
      _.random(10, 12) + " months ago",
    ];
    return _.sampleSize(times, 3);
  },
  fakeTotals() {
    return _.shuffle([_.random(20, 220), _.random(20, 120), _.random(20, 50)]);
  },
  fakeTrueFalse() {
    return _.sampleSize([false, true, true], 1);
  },
  fakeStocks() {
    return _.shuffle([_.random(50, 220), _.random(50, 120), _.random(50, 50)]);
  },
  fakeModifiers() {
    const altmodifiers = [
      { name: "Alt Modifier-1", price: "10$" },
      { name: "Alt Modifier-2", price: "100$" },
      { name: "Alt Modifier-3", price: "1000$" },
      { name: "Alt Modifier-4", price: "10000$" },
      { name: "Alt Modifier-5", price: "100000$" },
    ];
    return altmodifiers;
  },
  fakeIngredients() {
    const ingredients = [
      { name: "Suger", unit: "mg", price: "10$" },
      { name: "Source-1", unit: "g", price: "100$" },
      { name: "Sweet", unit: "kg", price: "1000$" },
      { name: "Oil", unit: "t", price: "10000$" },
      { name: "Source-2", unit: "tt", price: "100000$" },
    ];
    return ingredients;
  },
  fakeProducts() {
    const products = [
      { name: "Burger 1", category: "Burgers" },
      { name: "Seafood 1", category: "Seafood" },
      { name: "Salads 1", category: "Salads" },
      { name: "Seafood 5", category: "Seafood" },
      { name: "Burger 3", category: "Burgers" },
    ];
    return products;
  },
  fakeCategories() {
    const categories = [
      { name: "PC & Laptop", tags: "Apple, Asus, Lenovo, Dell, Acer" },
      {
        name: "Smartphone & Tablet",
        tags: "Samsung, Apple, Huawei, Nokia, Sony",
      },
      { name: "Electronic", tags: "Sony, LG, Toshiba, Hisense, Vizio" },
      {
        name: "Home Appliance",
        tags: "Whirlpool, Amana, LG, Frigidaire, Samsung",
      },
      { name: "Photography", tags: "Canon, Nikon, Sony, Fujifilm, Panasonic" },
      { name: "Fashion & Make Up", tags: "Nike, Adidas, Zara, H&M, Levi’s" },
      {
        name: "Kids & Baby",
        tags: "Mothercare, Gini & Jony, H&M, Babyhug, Liliput",
      },
      { name: "Hobby", tags: "Bandai, Atomik R/C, Atlantis Models, Carisma" },
      {
        name: "Sport & Outdoor",
        tags: "Nike, Adidas, Puma, Rebook, Under Armour",
      },
    ];

    return _.sampleSize(categories, 3).map((category) => {
      return {
        name: category.name,
        tags: category.tags,
        slug: _.replace(
          _.replace(_.toLower(category.name), / /g, "-"),
          "&",
          "and"
        ),
      };
    });
  },
  fakeNews() {
    const news = [
      {
        title: "Desktop publishing software like Aldus PageMaker",
        superShortContent: _.truncate(
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          {
            length: 30,
            omission: "",
          }
        ),
        shortContent: _.truncate(
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          {
            length: 150,
            omission: "",
          }
        ),
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: "Dummy text of the printing and typesetting industry",
        superShortContent: _.truncate(
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          {
            length: 30,
            omission: "",
          }
        ),
        shortContent: _.truncate(
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          {
            length: 150,
            omission: "",
          }
        ),
        content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      {
        title: "Popularised in the 1960s with the release of Letraset",
        superShortContent: _.truncate(
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
          {
            length: 30,
            omission: "",
          }
        ),
        shortContent: _.truncate(
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
          {
            length: 150,
            omission: "",
          }
        ),
        content:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      },
      {
        title: "200 Latin words, combined with a handful of model sentences",
        superShortContent: _.truncate(
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
          {
            length: 50,
            omission: "",
          }
        ),
        shortContent: _.truncate(
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
          {
            length: 150,
            omission: "",
          }
        ),
        content:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      },
    ];
    return _.shuffle(news);
  },
  fakeFiles() {
    const files = [
      { fileName: "Celine Dion - Ashes.mp4", type: "MP4", size: "20 MB" },
      { fileName: "Laravel 7", type: "Empty Folder", size: "120 MB" },
      { fileName: fakers.fakeImages()[0], type: "Image", size: "1.2 MB" },
      { fileName: "Repository", type: "Folder", size: "20 KB" },
      { fileName: "Resources.txt", type: "TXT", size: "2.2 MB" },
      { fileName: "Routes.php", type: "PHP", size: "1 KB" },
      { fileName: "Dota 2", type: "Folder", size: "112 GB" },
      { fileName: "Documentation", type: "Empty Folder", size: "4 MB" },
      { fileName: fakers.fakeImages()[0], type: "Image", size: "1.4 MB" },
      { fileName: fakers.fakeImages()[0], type: "Image", size: "1 MB" },
    ];
    return _.shuffle(files);
  },
  fakeJobs() {
    const jobs = [
      "Frontend Engineer",
      "Software Engineer",
      "Backend Engineer",
      "DevOps Engineer",
    ];
    return _.shuffle(jobs);
  },
  fakeNotificationCount() {
    return _.random(1, 7);
  },
  fakeFoods() {
    const foods = [
      {
        name: "Vanilla Latte",
        image: imageAssets["/src/assets/images/food-beverage-1.jpg"].default,
      },
      {
        name: "Milkshake",
        image: imageAssets["/src/assets/images/food-beverage-2.jpg"].default,
      },
      {
        name: "Soft Drink",
        image: imageAssets["/src/assets/images/food-beverage-3.jpg"].default,
      },
      {
        name: "Root Beer",
        image: imageAssets["/src/assets/images/food-beverage-4.jpg"].default,
      },
      {
        name: "Pocari",
        image: imageAssets["/src/assets/images/food-beverage-5.jpg"].default,
      },
      {
        name: "Ultimate Burger",
        image: imageAssets["/src/assets/images/food-beverage-6.jpg"].default,
      },
      {
        name: "Hotdog",
        image: imageAssets["/src/assets/images/food-beverage-7.jpg"].default,
      },
      {
        name: "Avocado Burger",
        image: imageAssets["/src/assets/images/food-beverage-8.jpg"].default,
      },
      {
        name: "Spaghetti Fettucine Aglio with Beef Bacon",
        image: imageAssets["/src/assets/images/food-beverage-9.jpg"].default,
      },
      {
        name: "Spaghetti Fettucine Aglio with Smoked Salmon",
        image: imageAssets["/src/assets/images/food-beverage-10.jpg"].default,
      },
      {
        name: "Curry Penne and Cheese",
        image: imageAssets["/src/assets/images/food-beverage-11.jpg"].default,
      },
      {
        name: "French Fries",
        image: imageAssets["/src/assets/images/food-beverage-12.jpg"].default,
      },
      {
        name: "Virginia Cheese Fries",
        image: imageAssets["/src/assets/images/food-beverage-13.jpg"].default,
      },
      {
        name: "Virginia Cheese Wedges",
        image: imageAssets["/src/assets/images/food-beverage-14.jpg"].default,
      },
      {
        name: "Fried/Grilled Banana",
        image: imageAssets["/src/assets/images/food-beverage-15.jpg"].default,
      },
      {
        name: "Crispy Mushroom",
        image: imageAssets["/src/assets/images/food-beverage-16.jpg"].default,
      },
      {
        name: "Fried Calamari",
        image: imageAssets["/src/assets/images/food-beverage-17.jpg"].default,
      },
      {
        name: "Chicken Wings",
        image: imageAssets["/src/assets/images/food-beverage-18.jpg"].default,
      },
      {
        name: "Snack Platter",
        image: imageAssets["/src/assets/images/food-beverage-19.jpg"].default,
      },
    ];
    return _.shuffle(foods);
  },
  fakeSchedule() {
    const schedules = [
      {
        id: "0",
        userid: 0,
        date: "12",
        start_time: "10 AM",
        end_time: "1 PM",
      },
      {
        id: "1",
        userid: 0,
        date: "12",
        start_time: "2 PM",
        end_time: "9 PM",
      },
      {
        id: "2",
        userid: 1,
        date: "13",
        start_time: "10 AM",
        end_time: "1 PM",
      },
      {
        id: "3",
        userid: 1,
        date: "13",
        start_time: "1 PM",
        end_time: "9 PM",
      },
      {
        id: "4",
        userid: 1,
        date: "14",
        start_time: "10 AM",
        end_time: "5 PM",
      },
      {
        id: "5",
        userid: 2,
        date: "14",
        start_time: "10 AM",
        end_time: "9 PM",
      },
      {
        id: "6",
        userid: 3,
        date: "15",
        start_time: "10 AM",
        end_time: "1 PM",
      },
      {
        id: "7",
        userid: 3,
        date: "15",
        start_time: "5 PM",
        end_time: "9 PM",
      },
      {
        id: "8",
        userid: 3,
        date: "16",
        start_time: "1 PM",
        end_time: "5 PM",
      },
      {
        id: "9",
        userid: 4,
        date: "16",
        start_time: "10 AM",
        end_time: "1 PM",
      },
    ]
    return schedules;
  },
  fakeHolidays() {
    const holidays = [
      {
        holidayName: "New Year",
        holidayDate: "2022/01/01",
        holidayDay: "Sunday",
      },
      {
        holidayName: "Good Friday",
        holidayDate: "2022/04/14",
        holidayDay: "Friday",
      },
      {
        holidayName: "May Day",
        holidayDate: "2022/05/01",
        holidayDay: "Monday",
      },
      {
        holidayName: "Memorial Day",
        holidayDate: "2022/05/28",
        holidayDay: "Monday",
      },
      {
        holidayName: "Ramzon",
        holidayDate: "2022/06/26",
        holidayDay: "Monday",
      },
      {
        holidayName: "Backrid",
        holidayDate: "2022/09/02",
        holidayDay: "Saturday",
      },
      {
        holidayName: "Deepavali",
        holidayDate: "2022/10/18",
        holidayDay: "Wednesday",
      },
      {
        holidayName: "Chrismas",
        holidayDate: "2022/12/25",
        holidayDay: "Monday",
      },
    ];
    return holidays;
  },
  fakeDepartments() {
    const departments = [
      {
        departmentId: "1",
        departmentName: "Front of house",
      },
      {
        departmentId: "2",
        departmentName: "Host",
      },
      {
        departmentId: "3",
        departmentName: "Cook",
      },
      {
        departmentId: "4",
        departmentName: "Manager",
      },
      {
        departmentId: "5",
        departmentName: "Server",
      },
    ];
    return departments;
  },
  fakeDesignations() {
    const designations = [
      {
        departmentName: "Cook",
        designationName: "Prep Cook",
      },
      {
        departmentName: "Cook",
        designationName: "Chef",
      },
      {
        departmentName: "Server",
        designationName: "Trainer",
      },
      {
        departmentName: "Server",
        designationName: "Lead Server",
      },
      {
        departmentName: "Host",
        designationName: "Seater",
      },
      {
        departmentName: "Server",
        designationName: "Togo Server",
      },
      {
        departmentName: "Server",
        designationName: "Bar Server",
      },
      {
        departmentName: "Manager",
        designationName: "General Manager",
      },
      {
        departmentName: "Host",
        designationName: "Host",
      },
    ];
    return designations;
  },

  fakeMenuCategories() {
    const categories = [
      {
        name: "Burgers",
      },
      { name: "Appetizers" },
      {
        name: "Salads",
      },
      {
        name: "Seafood",
      },
    ];

    return categories;
  },

  fakePromotionTypes() {
    const promotionTypes = [
      "promotion type1",
      "promotion type2",
      "promotion type3",
      "promotion type4",
      "promotion type5",
    ];
    return promotionTypes;
  },

  fakePromotions() {
    const promotions = [
      {
        name: "50% Off Single Item",
        code: "50percitem",
        value: "50",
        buttonText: "50% Item",
        receiptText: "50% ITEM DESC",
        includeTax: 1,
      },
      {
        name: "Library 15% Off",
        code: "15perccheck",
        value: "15",
        buttonText: "Library Disc",
        receiptText: "Library Disc",
        includeTax: 0,
      },
      {
        name: "$5 Off Check",
        code: "5ADe33",
        value: "value1",
        buttonText: "$5 Off Check",
        receiptText: "$5 Off Check",
        includeTax: 1,
      },
      {
        name: "manager",
        code: "manager",
        value: "100",
        buttonText: "manager",
        receiptText: "mamager discount",
        includeTax: 0,
      },
    ];

    return promotions;
  },
  fakeProviders() {
    const providers = [
      {
        name: "DoorDash",
        email: "support@doordash.com",
        password: "5asd0",
        api_key: "SD354SF3H3",
        regular_markup_rate: "50%",
        priority: 1,
      },
      {
        name: "UberEats",
        email: "support@ubereats.com",
        password: "34634fdg0",
        api_key: "SD354GDSF3H3",
        regular_markup_rate: "20%",
        priority: 1,
      },
      {
        name: "GrubHub",
        email: "support@grubhub.com",
        password: "634gfgg2",
        api_key: "FF64SF3H3",
        regular_markup_rate: "10.0",
        priority: 1,
      },
    ];

    return providers;
  },
  fakeItemClasses() {
    const itemClasses = [
      "Item ClassA",
      "Item ClassB",
      "Item ClassC",
      "Item ClassD",
      "Item ClassE",
    ];

    return itemClasses;
  },

  fakePrinterIds() {
    const printerIds = [
      "Printer AA",
      "Printer AB",
      "Printer AC",
      "Printer BA",
      "Printer BB",
    ];
    return printerIds;
  },

  fakeDailySalesReports() {
    const data = [
      {
        label: "Total Sales",
        value: "$153.34",
        type: "normal",
      },
      {
        label: "Non-Taxable Sales",
        value: "$64.23",
        type: "normal",
      },
      {
        label: "Sales",
        value: "",
        type: "title",
      },
      {
        label: "General Food",
        value: "$142.34",
        type: "normal",
      },
      {
        label: "Drinks",
        value: "$44.23",
        type: "normal",
      },
      {
        label: "Beer and Wine",
        value: "$34.43",
        type: "normal",
      },
      {
        label: "Liquor",
        value: "$15.43",
        type: "normal",
      },
      {
        label: "Appetizers",
        value: "$15.00",
        type: "normal",
      },
      {
        label: "",
        value: "",
        type: "blank",
      },
      {
        label: "Sold Gift Cards",
        value: "$63.00",
        type: "normal",
      },
      {
        label: "Tax",
        value: "",
        type: "title",
      },
      {
        label: "Total Tax",
        value: "$13.34",
        type: "normal",
      },
      {
        label: "Discount",
        value: "",
        type: "title",
      },
      {
        label: "Total Discount",
        value: "$10.34",
        type: "normal",
      },
      {
        label: "Payments",
        value: "",
        type: "title",
      },
      {
        label: "Total Cash",
        value: "$13.34",
        type: "normal",
      },
      {
        label: "Total Credit Card",
        value: "$150.63",
        type: "normal",
      },
      {
        label: "Total Gift Card",
        value: "$64.24",
        type: "normal",
      },
      {
        label: "Total House Acc",
        value: "$95.30",
        type: "normal",
      },
      {
        label: "Total Tips",
        value: "$13.63",
        type: "normal",
      },
      {
        label: "Collected Payments",
        value: "",
        type: "title",
      },
      {
        label: "Cash",
        value: "$153.34",
        type: "normal",
      },
      {
        label: "Credit Card",
        value: "$15.45",
        type: "normal",
      },
      {
        label: "House Acc",
        value: "$74.77",
        type: "normal",
      },
    ];
    return data;
  },

  fakeShiftReports() {
    const data = [
      {
        label: "Total Sales",
        value: "$153.34",
        type: "normal",
      },
      {
        label: "Non-Taxable Sales",
        value: "$64.23",
        type: "normal",
      },
      {
        label: "Total Tax",
        value: "$64.23",
        type: "normal",
      },
      {
        label: "Total Discounts",
        value: "$64.23",
        type: "normal",
      },
      {
        label: "Sold Gift Cards",
        value: "$64.23",
        type: "normal",
      },
      {
        label: "Total Transaction",
        value: "$64.23",
        type: "normal",
      },
      {
        label: "Open Orders",
        value: "12",
        type: "normal",
      },
      {
        label: "Transactions",
        value: "",
        type: "title",
      },
      {
        label: "Discount",
        value: "",
        type: "title",
      },
      {
        label: "",
        value: "",
        type: "blank",
      },
      {
        label: "Service Fee",
        value: "",
        type: "title",
      },
      {
        label: "",
        value: "",
        type: "blank",
      },
      {
        label: "Payment Totals",
        value: "",
        type: "title",
      },
      {
        label: "CASH TOTAL",
        value: "$13.34",
        type: "normal",
      },
      {
        label: "CREDIT CARD TOTAL",
        value: "$150.63",
        type: "normal",
      },
      {
        label: "GIFT CARD TOTAL",
        value: "$64.24",
        type: "normal",
      },
      {
        label: "HOUSE ACC TOTAL",
        value: "$95.30",
        type: "normal",
      },
      {
        label: "VOIDS",
        value: "$13.63",
        type: "normal",
      },
      {
        label: "REFUNDS",
        value: "$13.63",
        type: "normal",
      },
      {
        label: "TIPS",
        value: "$13.63",
        type: "normal",
      },
      {
        label: "Breakfast Grill QSR OWED",
        value: "$13.63",
        type: "normal",
      },
      {
        label: "Collected Payments",
        value: "",
        type: "title",
      },
      {
        label: "Cash",
        value: "$153.34",
        type: "normal",
      },
      {
        label: "Credit Card",
        value: "$15.45",
        type: "normal",
      },
      {
        label: "House Acc",
        value: "$74.77",
        type: "normal",
      },
    ];
    return data;
  },

  fakeHourPLReports() {
    const data = [
      {
        hour: "Total",
        cost: "$20.00",
        sales: "$20.00",
        pl: "+$5.50",
      },
    ];
    return data;
  },

  fakeEmployeeOnClockReports() {
    const data = [
      {
        label: "Alt U",
        value: "423h 23m",
        type: "normal",
      },
      {
        label: "Reg U",
        value: "623h 40m",
        type: "normal",
      },
      {
        label: "Manager U",
        value: "1147h 84m",
        type: "normal",
      },
    ];
    return data;
  },

  fakeSettings() {
    const settings = [
      {
        defaultSettings: {
          tableSettings: { useSeatMap: false, showTableMapDineIn: "start" },
          globalSettings: {
            venueid: 11,
            sendonpay: "true",
            venuename: "Nektar Juice Bar",
            groupItems: true,
            venuestatus: 1,
            hungrvenueid: "239",
            promptfortip: 0,
            timezonename: "America/Los_Angeles",
            autoclosetips: false,
            venueauthcode: "333333",
            invertOptionText: "true",
            allowExpotoRefire: 1,
            mobileCheckoutUrl: "https://mobilecheckout.stovepos.com/orderClose",
            orderrelayvenueid: null,
            login_screen_image: null,
            lock_orders_to_user: 0,
            customerTimeOutImage:
              "https://cdn.rapid.ws/img/stove/venue/11/nekter_full_image.jpg",
            employee_code_length: 4,
            customerCartViewImage:
              "https://cdn.rapid.ws/img/stove/venue/11/nekter_half_image.jpg",
            deliverydefaultprinter: "",
            printReceiptonApproval: "true",
            showThirdPartyinReports: false,
            qtyCustomerPaymentReceipt: 1,
            autoStartNewOrderOnReceipt: 1,
            printcustomerreceiptonsend: 0,
            allowCustomerModifierOption: false,
            showItemPricesCustomerDisplay: 0,
          },
          receiptSettings: {
            surveyText: "",
            footerLine1: "Thank You",
            footerLine2: "",
            footerLine3: "",
            headerLine1: "Nekter",
            headerLine2: "S123 A Street",
            headerLine3: "Somerville, Anywhere 12345",
            headerLine6: "",
            receiptLogoUrl:
              "https://cdn.rapid.ws/img/stove/venue/11/nekter_receipt_logo.jpg",
          },
        },
      },
    ];
    return settings;
  },
};

const fakerData = [];
for (let i = 0; i < 10; i++) {
  fakerData[fakerData.length] = {
    users: fakers.fakeUsers(),
    photos: fakers.fakePhotos(),
    images: fakers.fakeImages(),
    dates: fakers.fakeDates(),
    times: fakers.fakeTimes(),
    formattedTimes: fakers.fakeFormattedTimes(),
    totals: fakers.fakeTotals(),
    trueFalse: fakers.fakeTrueFalse(),
    stocks: fakers.fakeStocks(),
    altmodifiers: fakers.fakeModifiers(),
    ingredients: fakers.fakeIngredients(),
    products: fakers.fakeProducts(),
    categories: fakers.fakeCategories(),
    news: fakers.fakeNews(),
    files: fakers.fakeFiles(),
    jobs: fakers.fakeJobs(),
    notificationCount: fakers.fakeNotificationCount(),
    foods: fakers.fakeFoods(),
    holidays: fakers.fakeHolidays(),
    schedules: fakers.fakeSchedule(),
    departments: fakers.fakeDepartments(),
    designations: fakers.fakeDesignations(),
    projects: fakers.fakeProjects(),
    menuCategories: fakers.fakeMenuCategories(),
    itemClasses: fakers.fakeItemClasses(),
    printerIds: fakers.fakePrinterIds(),
    promotions: fakers.fakePromotions(),
    promotionTypes: fakers.fakePromotionTypes(),
    dailySalesReports: fakers.fakeDailySalesReports(),
    shiftReports: fakers.fakeShiftReports(),
    hourPLReports: fakers.fakeHourPLReports(),
    employeeOnClockReports: fakers.fakeEmployeeOnClockReports(),
    providers: fakers.fakeProviders(),
  };
}

export const faker = () => {
  return fakerData;
};
