import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private goals = new BehaviorSubject<any>(['Stop CMU', 'Join la Mutuelle', 'Get demi-tariff']);
	goal = this.goals.asObservable();

	constructor() { }

	changeGoal(goal) {
		this.goals.next(goal);
	}

}
