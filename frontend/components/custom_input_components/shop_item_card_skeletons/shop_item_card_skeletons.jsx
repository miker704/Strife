import React from 'react';
export const ShopItemCardGridSkeletonList = ({ listsToRender }) => {
    return (
        <>
            {
                Array(listsToRender)
                    .fill(1)
                    .map((card, index) => (
                        <div className='skeleton-shop-banner shop-item-card' key={`guild-grid-card-item-${card}-${index}`}>
                            <div className='skeleton-shop-banner-cardBody'>
                                <div className='skeleton-shop-banner-cardBody-avatar'></div>
                                <div className='skeleton-shop-banner-cardBody-title'></div>
                                <div className='skeleton-shop-banner-cardBody-description'></div>
                                <div className='skeleton-shop-banner-cardBody-summary'></div>
                            </div>
                        </div>
                    ))
            }
        </>
    );
};
