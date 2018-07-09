import { observable, action, runInAction } from 'mobx';


class Title {
    constructor(title, placeOfPublication, id) {
        this.title = title;
        this.placeOfPublication = placeOfPublication;
        this.id = id;
    }
}

class TitlesStore {
    @observable searchValue
    @observable filteredData
    @observable searchStatus

    constructor() {
        this.searchValue = '';
        this.filteredData = [];
        this.searchStatus = 'pending';
    }

    @action('SETS THE CURRENT STATE OF THE SEARCH FIELD')
    setValue = targetValue => {
        this.searchValue = targetValue;
        if (this.searchValue == '') {
            this.filteredData.length = 0;
            this.searchStatus = 'pending';
        }
    }

    @action('FETCH ARTICLES')
    async fetchArticles() {
        const url = `http://localhost:3000/items?q=${this.searchValue}`;
        try {
            this.searchStatus = 'loading';
            let response = await fetch(url);
            let data = await response.json();

            this.filteredData.replace(data.items.map(item =>
                new Title(item.title, item.place_of_publication, item.id)));

            runInAction(() => {
                this.filteredData.length == 0 ? this.searchStatus = 'empty' : this.searchStatus = 'pending';
            });
        }
        catch (error) {
            runInAction(() => {
                this.searchStatus = 'error';
            });
        }
    }
}

export default new TitlesStore;