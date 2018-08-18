
import { Injectable } from "@angular/core";
import { Constants } from '../common/constants';

@Injectable()
export class YoutubeServiceClient {

	constructor(
		private constants: Constants) { }

	getYoutubeObject = (searchCriteria) => {
		return fetch(this.constants.YOUTUBE_URL + searchCriteria + this.constants.YOUTUBE_URL_TWO)
			.then(response => {
			return response.json()
		});
	}



}
