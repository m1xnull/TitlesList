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

    constructor() {
        this.searchValue = '';
        this.filteredData = [];
    }

    @action('SETS THE CURRENT STATE OF THE SEARCH FIELD')
    setValue = targetValue => {
        this.searchValue = targetValue;
        this.searchValue == '' ? this.filteredData.clear() : false;
    }

    @action('FILTERING ARTICLES')
    fetch = () => {
        this.filteredData.replace(mockData.filter(item =>
            this.searchValue.toLowerCase() == item.title.toLowerCase()));
    }
}

export default new TitlesStore()