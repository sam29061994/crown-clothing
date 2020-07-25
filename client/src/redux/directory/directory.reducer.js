const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl:
                'https://images.unsplash.com/photo-1571820604714-ca1a5858fdc2',
            id: 1,
            linkUrl: 'shop/hats',
        },
        {
            title: 'jackets',
            imageUrl:
                'https://images.unsplash.com/photo-1546689188-14ec534d258e',
            id: 2,
            linkUrl: 'shop/jackets',
        },
        {
            title: 'sneakers',
            imageUrl:
                'https://images.unsplash.com/photo-1512374382149-233c42b6a83b',
            id: 3,
            linkUrl: 'shop/sneakers',
        },
        {
            title: 'womens',
            imageUrl:
                'https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens',
        },
        {
            title: 'mens',
            imageUrl:
                'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens',
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
