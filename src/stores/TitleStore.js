import { observable, action, computed } from 'mobx';

class TitleStore {

    @observable searchValue
    @observable filteredData

    constructor() {
        this.searchValue = '';

        this.filteredData = [];
        this.mockData = [
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
    }

    @computed get stateSearchValue() {
        if (this.searchValue == '') {
            return true
        }
        else {
            return false
        }
    }

    @action('SET SEARCH VALUE')
    setValue = event => {
        this.searchValue = event.target.value;
        if (this.searchValue == '') {
            this.filteredData.length = 0;
        }
    }

    @action('HANDLER SEARCH VALUE')
    handlerValue = event => {
        event.preventDefault();
        this.filteredData.length = 0;
        this.mockData.map((item, id) => {
            if (this.searchValue.toLowerCase() == item.title.toLowerCase()) {
                this.filteredData.push(
                    {
                        title: item.title,
                        placeOfPublication: item.placeOfPublication,
                        id: id,
                    }
                )
            }
        })
    }
}

export default new TitleStore()