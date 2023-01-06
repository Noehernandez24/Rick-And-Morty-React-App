import React from 'react';

const Pagination = ({totalPosts, postPerPage, setActualPage, actualPage}) => {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i)
    }

    const getButtonPages = () =>{
        if (totalPosts > 0 && pages.length > 1) {
            return (
                <div className='pagination'>
                {
                pages.map((page, index) => (
                    <a
                    style={actualPage === page ? {backgroundColor: "cyan"} : {backgroundColor:"darkcyan"}} 
                    href="#" 
                    className='btn-pagination' 
                    key={index} 
                    onClick={() => setActualPage(page)}>{page}
                    </a>
                    ))
                }
           </div>
            )
        }
    }
    

    return (
        <>
        {getButtonPages()}
        </>
    );
};

export default Pagination;