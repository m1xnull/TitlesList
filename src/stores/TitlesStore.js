import { observable, action } from 'mobx';

const mockData = [
    {
        title: 'TEST1',
        placeOfPublication: 'TEST1 TEST1',
        id: "1"
    },
    {
        title: 'TEST1',
        placeOfPublication: 'TEST2 TEST2',
        id: '2'
    },
    {
        title: 'TEST1',
        placeOfPublication: 'TEST3 TEST3',
        id: '3'
    },
    {
        title: 'TEST2',
        placeOfPublication: 'TEST1 TEST1',
        id: '4'
    },
    {
        title: 'TEST2',
        placeOfPublication: 'TEST2 TEST2',
        id: '5'
    }
]

class TitlesStore {
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

export default new TitlesStore()