import { Comment } from './comment.module';
import { User } from  './user.model';

export interface Interpretation{
	lastUpdate: string;
	created: string;
	id: string;
	href: string;
	text: string;
	type: string;
	likes: number;
	user: User;
	comments: Comment[];
	likedBy: [];
}
