class Singleton {
  //   private static _instance = Singleton;
  private static _instance = new Singleton();
  private constructor() {
    console.log("싱글톤 생성~!");
  }

  public static getInstance() {
    // if (this._instance) {
    //   return this._instance;
    // }
    // this._instance = new Singleton();
    return this._instance;
  }
}

const single1: Singleton = Singleton.getInstance();
const single2: Singleton = Singleton.getInstance();
const single3: Singleton = Singleton.getInstance();
