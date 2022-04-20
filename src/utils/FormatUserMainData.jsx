/**
 * @description class to create user's main data
 */
class FormatUserMainData {
  /**
   * 
   * @property {Object} res main data about the user
   */
  constructor(res) {
    /**
     * @property {number} id 
     */
    this.id = res.id;
    /**
     * @property {string} firstName 
     */
    this.firstName = res.userInfos.firstName;
    /**
     * @property {string} lastName 
     */
    this.lastName = res.userInfos.lastName;
    /**
     * @property {number} age
     */
    this.age = res.userInfos.age;
    /**
     * @property {number} todayScore
     */
    this.todayScore = res.todayScore;
    /**
     * @property {number} score
     */
    this.score = res.score;
    /**
     * @property {number} calorieCount
     */
    this.calorieCount = res.keyData.calorieCount;
    /**
     * @property {number} proteinCount
     */
    this.proteinCount = res.keyData.proteinCount;
    /**
     * @property {number} carbohydrateCount
     */
    this.carbohydrateCount = res.keyData.carbohydrateCount;
    /**
     * @property {number} lipidCount
     */
    this.lipidCount = res.keyData.lipidCount;
  }
}
export {FormatUserMainData};

/**
 * @description class to create user's sessions results
 */
class FormatUserActivity {
  /**
   * 
   * @param {Object} res user's id and sessions
   */
  constructor(res) {
    /**
     * @property {number} id
     */
    this.id = res.userId;
    /**
     * @property {Array.<{day: date, kilograms: number, calories: number}>} sessions
     */
    this.sessions = res.sessions;
  }
}
export {FormatUserActivity};

/**
 * @description class to create user's sessions length
 */
class FormatUserAverageSessions {
  constructor(res) {
    /**
     * @property {number} id
     */
    this.id = res.userId;
    /**
     * @property {Array.<{day: number, sessionLength : number, dayLetter: string}>} sessions
     */
    this.sessions = res.sessions;
  }
}
export {FormatUserAverageSessions}

/**
 * @description class to create user's performances
 */
class FormatUserPerformance {
  constructor(res) {
    /**
     * @property {number} id
     */
    this.id = res.userId;
    /**
     * @property {array.<string>}
     */
    this.kind = res.kind;
    /**
     * @property {array.<{value: number, kind: number, type: string}>}
     */
    this.data = res.data;
  }
}
export {FormatUserPerformance}

