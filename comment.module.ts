export interface Comment{
	created: string;
	lastUpdated: string;
	id: string;
	externalAccess: boolean;
	text: string;
	favorite: boolean;
	access: {
		read: boolean;
		update: boolean;
		externalize: boolean;
		delete: boolean;
		write: boolean;
		manage: boolean;
		};
	user: User;
	favorites: string[];
	userGroupAccesses: string[];
	attributeValues: string[];
	translations: string[];
	mentions: User[];
	userAccesses: string[ ];
	}
]
}
