import { observable, action, computed } from 'mobx';

class TitleStore {
    @observable searchValue
    @observable filteredData
    @observable stateSearch

    constructor() {
        this.searchValue = '';
        this.filteredData = [];
        this.stateSearch = 'pending';
        this.fetchItems = this.fetchItems.bind(this);
    }

    @computed get stateSearchValue() {
        if (this.searchValue == '') {
            return true
        }
        else {
            return false
        }
    }

    @computed get statusSearch() {
        return this.stateSearch;
    }

    @action('SET SEARCH VALUE')
    setValue = event => {
        this.searchValue = event.target.value;
        if (this.searchValue == '') {
            this.filteredData.length = 0;
            this.stateSearch = 'pending';
        }
    }

    @action('HANDLER SEARCH VALUE')
    async fetchItems(event) {
        event.preventDefault();
        this.filteredData.length = 0;

        const url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${this.searchValue}&format=json&page=1`;
        try {
            this.stateSearch = 'loading';
            let response = await fetch(url);
            let data = await response.json();

            data.items.map((item) => {
                this.filteredData.push(
                    {
                        title: item.title,
                        placeOfPublication: item.place_of_publication,
                        id: item.id,
                    }
                )
            })

            if (this.filteredData.length == 0)
                this.stateSearch = 'empty';
            else
                this.stateSearch = 'pending';
        }

        catch (error) {
            this.stateSearch = 'error';
        }
    }

}

export default new TitleStore()