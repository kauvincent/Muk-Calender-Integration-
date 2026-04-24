// Mocking integration with external Makerere Timetable Management System
export class TimetableService {
  static async fetchTimetable(regNumber) {
    // In a real scenario, this would make an API call to Mak portals
    // return axios.get(`https://mak.ac.ug/api/timetable/${regNumber}`);

    // Generate mock schedule dynamically anchored to the current week
    const now = new Date();
    // Get the Monday of the current week as the baseline
    const monday = new Date(now);
    const day = now.getDay() || 7; // Convert Sunday from 0 to 7
    monday.setDate(now.getDate() - day + 1);
    monday.setHours(0, 0, 0, 0);

    const getDayTime = (daysFromMonday, hours, minutes = 0) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + daysFromMonday);
      d.setHours(hours, minutes, 0);
      return d.toISOString();
    };

    return [
      {
        course_code: "IST 3206",
        course_name: "System Integration & Deployment",
        lecturer: "Dr. Richard Ssekibuule",
        location: "Block A - Room 102",
        start_time: getDayTime(0, 9),      // Monday 9:00 AM
        end_time: getDayTime(0, 11)        // Monday 11:00 AM
      },
      {
        course_code: "BIT 3208",
        course_name: "IT Project Management",
        lecturer: "Dr. Evelyn Kigozi",
        location: "CIT Lab 2",
        start_time: getDayTime(0, 14),     // Monday 2:00 PM
        end_time: getDayTime(0, 17)        // Monday 5:00 PM
      },
      {
        course_code: "CSC 3201",
        course_name: "Operating Systems",
        lecturer: "Prof. Engineer",
        location: "CIT Lab 4",
        start_time: getDayTime(1, 10),     // Tuesday 10:00 AM
        end_time: getDayTime(1, 13)        // Tuesday 1:00 PM
      },
      {
        course_code: "IST 3204",
        course_name: "Information Systems Security",
        lecturer: "Mr. Paul Birevu",
        location: "Block B - Room 10",
        start_time: getDayTime(2, 9),      // Wednesday 9:00 AM
        end_time: getDayTime(2, 12)        // Wednesday 12:00 PM
      },
      {
        course_code: "IST 3205",
        course_name: "Data Warehousing and Mining",
        lecturer: "Dr. Agnes Nakakawa",
        location: "CIT Lab 3",
        start_time: getDayTime(3, 15),     // Thursday 3:00 PM
        end_time: getDayTime(3, 17)        // Thursday 5:00 PM
      },
       {
        course_code: "BKE 3201",
        course_name: "Entrepreneurship Skills",
        lecturer: "Mrs. Sarah Nanyonga",
        location: "FEMA Big Lab",
        start_time: getDayTime(4, 11),     // Friday 11:00 AM
        end_time: getDayTime(4, 13)        // Friday 1:00 PM
      }
    ];
  }
}
