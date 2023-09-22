import React from 'react';
import { Skeleton } from '@mui/material';
import { styled } from "@mui/material/styles";
const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
    backgroundColor: `var(--text-normal)`, opacity: `0.08`, borderRadius: `0.5rem`,
    flex: `0 0 auto`, height: `1rem`, lineHeight: `1.375rem`, verticalAlign: `middle`,
    marginTop: `0.1875rem`,
    '&.MuiSkeleton-root+&.MuiSkeleton-root': {
        marginLeft: `0.25rem`,
    },
}));
export const GuildCardGridSkeletonList = ({ listsToRender }) => {
    return (
        <>
            {
                Array(listsToRender)
                    .fill(1)
                    .map((card, index) => (

                        <div className='loaded-guilds' key={`guild-grid-card-item-${card}-${index}`}>
                            <div className='guild-card'>
                                <StyledSkeleton
                                    sx={{ opacity: '0.03', width: '330px', height: '320px', marginTop: `0.125rem`, borderRadius: `8px`, backgroundColor: `var(--text-normal)` }}
                                    variant="rectangular"
                                    animation={'wave'}
                                />
                            </div>
                        </div>
                    ))
            }
        </>
    );
};
export const GuildCardSearchSkeletonList = ({ listsToRender }) => {
    return (
        <>
            {
                Array(listsToRender)
                    .fill(1)
                    .map((card, index) => (

                        <div className='loaded-guilds' key={`guild-grid-card-item-${card}-${index}`}>
                            <div className='sr-guild-card-container'>
                                <StyledSkeleton
                                    sx={{ opacity: '0.03', width: '720px', height: '135px', marginTop: `0.125rem`, borderRadius: `8px`, backgroundColor: `var(--text-normal)` }}
                                    variant="rectangular"
                                    animation={'wave'}
                                />
                            </div>
                        </div>
                    ))
            }
        </>
    );
};