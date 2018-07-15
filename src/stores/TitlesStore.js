import { observable, action, runInAction } from "mobx";

class Title {
  constructor(title, placeOfPublication, id) {
    this.title = title;
    this.placeOfPublication = placeOfPublication;
    this.id = id;
  }
}

class TitlesStore {
  @observable searchValue;

  @observable filteredData;

  @observable searchStatus;

  constructor() {
    this.searchValue = "";
    this.filteredData = [];
    this.searchStatus = "pending";
  }

  @action("SETS THE CURRENT STATE OF THE SEARCH FIELD")
  setValue = targetValue => {
    this.searchValue = targetValue;
    if (this.searchValue === "") {
      this.filteredData.length = 0;
      this.searchStatus = "pending";
    }
  };

  @action("FETCH ARTICLES")
  async fetchArticles() {
    const url = `http://localhost:3000/items?q=${this.searchValue}`;
    try {
      this.searchStatus = "loading";
      const response = await fetch(url);
      const data = await response.json();

      runInAction(() => {
        this.filteredData.replace(
          data.map(
            item => new Title(item.title, item.placeOfPublication, item.id)
          )
        );
        this.filteredData.length === 0
          ? (this.searchStatus = "empty")
          : (this.searchStatus = "pending");
      });
    } catch (error) {
      runInAction(() => {
        this.searchStatus = "error";
      });
    }
  }
}

export default new TitlesStore();
