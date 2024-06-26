export type Person = {
  id: number;
  fullName: string;
  department: string;
  jobTitle: string;
  status: boolean;
  statusOne: { date: string; status: string };
  statusTwo: { date: string; status: string };
  statusThree: { date: string; status: string };
};

export type Persons = Person[];

// export const headers: Headers = [
//   { field: "fullName", label: "Full name / Health check" },
//   { field: "combinedStatus", label: "Code" },
//   { field: "dateCount", label: "Expiration" },
//   { field: "dateCount", label: "Status" },
//   { field: "department", label: "Department" },
//   { field: "status", label: "User status" },
//   { field: "jobTitle", label: "Job title" },
// ];

// type Headers = {
//   field: string;
//   label: string;
// }[];

export const data: Persons = [
  {
    id: 1,
    fullName: "Tedda MacKinnon",
    department: "Research and Development",
    jobTitle: "Assistant Professor",
    status: true,
    statusOne: { date: "10/3/2025", status: "valid" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "2/11/2026", status: "valid" },
  },
  {
    id: 2,
    fullName: "Othella Quiney",
    department: "Legal",
    jobTitle: "VP Marketing",
    status: true,
    statusOne: { date: "9/3/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "6/13/2023", status: "valid" },
  },
  {
    id: 3,
    fullName: "Pippo Bernaldo",
    department: "Engineering",
    jobTitle: "Teacher",
    status: true,
    statusOne: { date: "11/3/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "4/13/2026", status: "canceled" },
  },
  {
    id: 4,
    fullName: "Port Nodes",
    department: "Research and Development",
    jobTitle: "Assistant Media Planner",
    status: true,
    statusOne: { date: "9/3/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "6/13/2023", status: "expired" },
  },
  {
    id: 5,
    fullName: "Dewey Dantesia",
    department: "Support",
    jobTitle: "Food Chemist",
    status: true,
    statusOne: { date: "11/3/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "canceled" },
    statusThree: { date: "4/13/2026", status: "canceled" },
  },
  {
    id: 6,
    fullName: "Rickert Chilcott",
    department: "Accounting",
    jobTitle: "Physical Therapy Assistant",
    status: true,
    statusOne: { date: "6/29/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "11/25/2029", status: "valid" },
  },
  {
    id: 7,
    fullName: "Neall Proske",
    department: "Engineering",
    jobTitle: "Financial Advisor",
    status: true,
    statusOne: { date: "7/29/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "canceled" },
    statusThree: { date: "10/25/2023", status: "valid" },
  },
  {
    id: 8,
    fullName: "Joete Bohea",
    department: "Marketing",
    jobTitle: "Design Engineer",
    status: true,
    statusOne: { date: "8/29/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "9/25/2029", status: "valid" },
  },
  {
    id: 9,
    fullName: "Freedman Maunders",
    department: "Marketing",
    jobTitle: "Civil Engineer",
    status: false,
    statusOne: { date: "2/9/2024", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "9/20/2023", status: "expired" },
  },
  {
    id: 10,
    fullName: "Matilde Arndtsen",
    department: "Services",
    jobTitle: "Community Outreach Specialist",
    status: true,
    statusOne: { date: "3/30/2025", status: "valid" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "7/25/2029", status: "valid" },
  },
  {
    id: 11,
    fullName: "Mercedes Habbes",
    department: "Legal",
    jobTitle: "Geologist III",
    status: true,
    statusOne: { date: "7/3/2025", status: "valid" },
    statusTwo: { date: "12/22/2023", status: "expired" },
    statusThree: { date: "6/27/2029", status: "valid" },
  },
  {
    id: 12,
    fullName: "Kean Andreu",
    department: "Human Resources",
    jobTitle: "Data Coordinator",
    status: true,
    statusOne: { date: "5/16/2023", status: "expired" },
    statusTwo: { date: "12/22/2022", status: "expired" },
    statusThree: { date: "8/27/2023", status: "expired" },
  },
  {
    id: 13,
    fullName: "Hinda Greenslade",
    department: "Marketing",
    jobTitle: "VP Marketing",
    status: false,
    statusOne: { date: "1/5/2024", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "8/26/2023", status: "expired" },
  },
  {
    id: 14,
    fullName: "Sherlock Gauntlett",
    department: "Accounting",
    jobTitle: "Structural Analysis Engineer",
    status: true,
    statusOne: { date: "11/19/2027", status: "valid" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "12/27/2029", status: "valid" },
  },
  {
    id: 15,
    fullName: "Lennie Matisse",
    department: "Accounting",
    jobTitle: "Web Developer IV",
    status: true,
    statusOne: { date: "11/25/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "1/7/2026", status: "valid" },
  },
  {
    id: 16,
    fullName: "Stafford Caldero",
    department: "Product Management",
    jobTitle: "Account Coordinator",
    status: true,
    statusOne: { date: "11/27/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "2/20/2024", status: "expired" },
  },
  {
    id: 17,
    fullName: "Bevon Yockley",
    department: "Services",
    jobTitle: "Executive Secretary",
    status: false,
    statusOne: { date: "11/21/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "7/4/2023", status: "expired" },
  },
  {
    id: 18,
    fullName: "Hubert Hylton",
    department: "Support",
    jobTitle: "Mechanical Systems Engineer",
    status: true,
    statusOne: { date: "11/30/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "canceled" },
    statusThree: { date: "8/12/2023", status: "expired" },
  },
  {
    id: 19,
    fullName: "Bronny Widdowfield",
    department: "Business Development",
    jobTitle: "Developer II",
    status: true,
    statusOne: { date: "12/6/2024", status: "valid" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "3/26/2023", status: "expired" },
  },
  {
    id: 20,
    fullName: "Winston Grantham",
    department: "Human Resources",
    jobTitle: "Product Engineer",
    status: false,
    statusOne: { date: "3/17/2024", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "2/2/2024", status: "expired" },
  },
  {
    id: 21,
    fullName: "Jacklyn Becarra",
    department: "Marketing",
    jobTitle: "Accounting Assistant II",
    status: false,
    statusOne: { date: "10/23/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "10/18/2029", status: "canceled" },
  },
  {
    id: 22,
    fullName: "Issi Hellewell",
    department: "Legal",
    jobTitle: "Recruiter",
    status: true,
    statusOne: { date: "8/24/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "3/17/2024", status: "expired" },
  },
  {
    id: 23,
    fullName: "Melisenda Learmount",
    department: "Engineering",
    jobTitle: "Computer Systems Analyst III",
    status: true,
    statusOne: { date: "8/11/2026", status: "canceled" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "9/30/2023", status: "expired" },
  },
  {
    id: 24,
    fullName: "Shelbi Scoterbosh",
    department: "Sales",
    jobTitle: "VP Quality Control",
    status: false,
    statusOne: { date: "1/5/2024", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "8/26/2023", status: "expired" },
  },
  {
    id: 25,
    fullName: "Courtnay Davenhall",
    department: "Training",
    jobTitle: "Staff Accountant I",
    status: false,
    statusOne: { date: "12/31/2023", status: "expired" },
    statusTwo: { date: "12/22/2025", status: "valid" },
    statusThree: { date: "6/27/2023", status: "expired" },
  },
  {
    id: 26,
    fullName: "Clemence Carrell",
    department: "Marketing",
    jobTitle: "Teacher",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 27,
    fullName: "Birgit Vokes",
    department: "Sales",
    jobTitle: "Sales Representative",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 28,
    fullName: "Dino Darrigoe",
    department: "Accounting",
    jobTitle: "Assistant Media Planner",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 29,
    fullName: "Susie Comford",
    department: "Legal",
    jobTitle: "Web Designer III",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },

  {
    id: 30,
    fullName: "Agustin Kidner",
    department: "Engineering",
    jobTitle: "Assistant Manager",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2027", status: "valid" },
  },
  {
    id: 31,
    fullName: "Anica Maylott",
    department: "Support",
    jobTitle: "Health Coach III",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 32,
    fullName: "Cecilia Jereatt",
    department: "Support",
    jobTitle: "Programmer Analyst III",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 33,
    fullName: "Townie Drane",
    department: "Marketing",
    jobTitle: "Structural Engineer",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 34,
    fullName: "Leesa Fassman",
    department: "Accounting",
    jobTitle: "Health Coach III",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 35,
    fullName: "Putnem Divina",
    department: "Business Development",
    jobTitle: "Chief Design Engineer",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 36,
    fullName: "Aliza Mitchener",
    department: "Accounting",
    jobTitle: "Quality Engineer",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 37,
    fullName: "Corene Gallego",
    department: "Business Development",
    jobTitle: "Human Resources Assistant IV",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 38,
    fullName: "Herbert Prest",
    department: "Sales",
    jobTitle: "Computer Systems Analyst I",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2027", status: "valid" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 39,
    fullName: "Gilbertina D'Avaux",
    department: "Legal",
    jobTitle: "Executive Secretary",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 40,
    fullName: "Cesar Domelow",
    department: "Accounting",
    jobTitle: "Software Test Engineer I",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 41,
    fullName: "Carr Ales",
    department: "Support",
    jobTitle: "Assistant Professor",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 42,
    fullName: "Arch Gomm",
    department: "Accounting",
    jobTitle: "Dental Hygienist",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2026", status: "valid" },
    statusThree: { date: "11/02/2029", status: "valid" },
  },
  {
    id: 43,
    fullName: "Ingram Rowe",
    department: "Research and Development",
    jobTitle: "Quality Engineer",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 44,
    fullName: "Goldina Biddlestone",
    department: "Human Resources",
    jobTitle: "Actuary",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 45,
    fullName: "Ardella Olyfat",
    department: "Training",
    jobTitle: "Graphic Designer",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 46,
    fullName: "Nicole Tuckie",
    department: "Product Management",
    jobTitle: "Pharmacist",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 47,
    fullName: "Johnathan Lockley",
    department: "Services",
    jobTitle: "Geological Engineer",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 48,
    fullName: "Patricia Mourton",
    department: "Services",
    jobTitle: "Research Nurse",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 49,
    fullName: "Neda Jugging",
    department: "Product Management",
    jobTitle: "Administrative Assistant I",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 50,
    fullName: "Stevena Calverley",
    department: "Training",
    jobTitle: "VP Product Management",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 51,
    fullName: "Noni Grewar",
    department: "Legal",
    jobTitle: "Safety Technician IV",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 52,
    fullName: "Pippy Muller",
    department: "Research and Development",
    jobTitle: "Sales Representative",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 53,
    fullName: "Kamillah Nibley",
    department: "Human Resources",
    jobTitle: "Project Manager",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 54,
    fullName: "Rhetta Tivnan",
    department: "Business Development",
    jobTitle: "Community Outreach Specialist",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 55,
    fullName: "Herculie Adenot",
    department: "Services",
    jobTitle: "Staff Accountant II",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 56,
    fullName: "Carrissa Scurry",
    department: "Product Management",
    jobTitle: "Account Representative II",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 57,
    fullName: "Rennie Burdytt",
    department: "Legal",
    jobTitle: "Technical Writer",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2025", status: "valid" },
  },
  {
    id: 58,
    fullName: "Steffane Batty",
    department: "Legal",
    jobTitle: "Programmer Analyst I",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 59,
    fullName: "Winn Twentyman",
    department: "Research and Development",
    jobTitle: "Financial Analyst",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 60,
    fullName: "Mariam Benneton",
    department: "Support",
    jobTitle: "Media Manager II",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 61,
    fullName: "Price Le Marchant",
    department: "Sales",
    jobTitle: "VP Marketing",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 62,
    fullName: "Jacques Whitewood",
    department: "Support",
    jobTitle: "Health Coach III",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 63,
    fullName: "Huberto Jori",
    department: "Engineering",
    jobTitle: "Account Executive",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 64,
    fullName: "Arvie Clapperton",
    department: "Legal",
    jobTitle: "Nurse Practicioner",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "canceled" },
  },
  {
    id: 65,
    fullName: "Dudley Blinde",
    department: "Training",
    jobTitle: "Assistant Media Planner",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 66,
    fullName: "Emalee Woan",
    department: "Legal",
    jobTitle: "Software Test Engineer I",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 67,
    fullName: "Sidonnie Kohneke",
    department: "Product Management",
    jobTitle: "Account Coordinator",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 68,
    fullName: "Fidelio Troughton",
    department: "Engineering",
    jobTitle: "Programmer I",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 69,
    fullName: "Mitchel Jarrelt",
    department: "Legal",
    jobTitle: "Help Desk Technician",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "canceled" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 70,
    fullName: "Freedman Maunders",
    department: "Marketing",
    jobTitle: "Civil Engineer",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 71,
    fullName: "Matilde Arndtsen",
    department: "Services",
    jobTitle: "Community Outreach Specialist",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 72,
    fullName: "Mercedes Habbes",
    department: "Legal",
    jobTitle: "Geologist III",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 73,
    fullName: "Kean Andreu",
    department: "Human Resources",
    jobTitle: "Data Coordinator",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 74,
    fullName: "Hinda Greenslade",
    department: "Marketing",
    jobTitle: "VP Marketing",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 75,
    fullName: "Sherlock Gauntlett",
    department: "Accounting",
    jobTitle: "Structural Analysis Engineer",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 76,
    fullName: "Lennie Matisse",
    department: "Accounting",
    jobTitle: "Web Developer IV",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 77,
    fullName: "Stafford Caldero",
    department: "Product Management",
    jobTitle: "Account Coordinator",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 78,
    fullName: "Bevon Yockley",
    department: "Services",
    jobTitle: "Executive Secretary",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 79,
    fullName: "Hubert Hylton",
    department: "Support",
    jobTitle: "Mechanical Systems Engineer",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2027", status: "valid" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 80,
    fullName: "Bronny Widdowfield",
    department: "Business Development",
    jobTitle: "Developer II",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 81,
    fullName: "Winston Grantham",
    department: "Human Resources",
    jobTitle: "Product Engineer",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 82,
    fullName: "Jacklyn Becarra",
    department: "Marketing",
    jobTitle: "Accounting Assistant II",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 83,
    fullName: "Issi Hellewell",
    department: "Legal",
    jobTitle: "Recruiter",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 84,
    fullName: "Melisenda Learmount",
    department: "Engineering",
    jobTitle: "Computer Systems Analyst III",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 85,
    fullName: "Shelbi Scoterbosh",
    department: "Sales",
    jobTitle: "VP Quality Control",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 86,
    fullName: "Courtnay Davenhall",
    department: "Training",
    jobTitle: "Staff Accountant I",
    status: false,
    statusOne: { date: "10/01/2025", status: "canceled" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 87,
    fullName: "Clemence Carrell",
    department: "Marketing",
    jobTitle: "Teacher",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 88,
    fullName: "Birgit Vokes",
    department: "Sales",
    jobTitle: "Sales Representative",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 89,
    fullName: "Dino Darrigoe",
    department: "Accounting",
    jobTitle: "Assistant Media Planner",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 90,
    fullName: "Susie Comford",
    department: "Legal",
    jobTitle: "Web Designer III",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 91,
    fullName: "Tripp Sivorn",
    department: "Human Resources",
    jobTitle: "Registered Nurse",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 92,
    fullName: "Gasparo Cawson",
    department: "Legal",
    jobTitle: "Internal Auditor",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 93,
    fullName: "Amye Sumshon",
    department: "Accounting",
    jobTitle: "Statistician III",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 94,
    fullName: "Vilma Byron",
    department: "Sales",
    jobTitle: "Nurse",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 95,
    fullName: "Fawnia Hairsine",
    department: "Marketing",
    jobTitle: "Senior Sales Associate",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2028", status: "valid" },
  },
  {
    id: 96,
    fullName: "Daron Braunroth",
    department: "Marketing",
    jobTitle: "Financial Advisor",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 97,
    fullName: "Winfred Earnshaw",
    department: "Legal",
    jobTitle: "Actuary",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2029", status: "vallid" },
    statusThree: { date: "11/02/2026", status: "valid" },
  },
  {
    id: 98,
    fullName: "Linell Roebottom",
    department: "Support",
    jobTitle: "Financial Analyst",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 99,
    fullName: "Rosemary Ham",
    department: "Marketing",
    jobTitle: "Junior Executive",
    status: true,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
  {
    id: 100,
    fullName: "Billye Cansfield",
    department: "Support",
    jobTitle: "Legal Assistant",
    status: false,
    statusOne: { date: "10/01/2025", status: "valid" },
    statusTwo: { date: "04/14/2023", status: "expired" },
    statusThree: { date: "11/02/2021", status: "expired" },
  },
];
