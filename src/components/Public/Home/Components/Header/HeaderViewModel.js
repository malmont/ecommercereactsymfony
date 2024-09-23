import {getHomeSlider} from './api';
import { makeAutoObservable,runInAction } from 'mobx';
import HeaderModel from '../../../../../models/HeaderModel';

class HeaderViewModel {
    homeSlider = [];
    loading = true;

    constructor(){
        makeAutoObservable(this);
    }

    async loadHomeSlider(){
        try {
            const homeSliderData = await getHomeSlider();
            const homeSlider = homeSliderData.map(homeSlider => new HeaderModel(homeSlider));

            runInAction(() => {
                this.homeSlider = homeSlider;
                this.loading = false;
            });
        } catch (error) {
            console.error('Failed to load homeSlider:', error);
            runInAction(() => {
                this.loading = false;
            });
        }
    }
}
export default HeaderViewModel;
