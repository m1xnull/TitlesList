import { observable, action } from 'mobx'

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

    @action('SET SEARCH VALUE')
    setValue = targetValue => {
        this.searchValue = targetValue;
        if (this.searchValue == '') {
            this.filteredData.length = 0;
            this.searchStatus = 'pending';
        }
    }

    @action('HANDLER SEARCH VALUE')
    async fetchItems() {
        this.filteredData.clear();
        const url = `http://localhost:3000/items?q=${this.searchValue}`;
        try {
            this.searchStatus = 'loading';
            let response = await fetch(url);
            let data = await response.json();
            data.map(item => this.filteredData.push(new Title(item.title, item.placeOfPublication, item.id)));
            this.filteredData.length == 0 ? this.searchStatus = 'empty' : this.searchStatus = 'pending';
        }
        catch (error) {
            this.searchStatus = 'error';
        }
    }
}

export default new TitlesStore;