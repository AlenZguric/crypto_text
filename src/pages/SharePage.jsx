import React, {useEffect} from 'react';
import PageTitle from '../components/header/js/PageTitle';
import Data from "../translation/Data.json"

const SharePage = () => {
    const currentLanguage = localStorage.getItem('language') || 'hr'; 
    const title = Data[currentLanguage]?.link_share || 'Naslov po defaultu';

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <div>
           <PageTitle title={title}/>
           PODIJELI APP 
           <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum placeat, voluptates excepturi laborum similique perspiciatis vel, minima nihil veritatis illum necessitatibus aliquam labore distinctio. Cum consequuntur perferendis obcaecati accusamus ipsum dolore necessitatibus ullam, iure fugit voluptates nemo ab alias nostrum beatae non vel explicabo eos maxime laudantium aliquam ducimus! Nemo quaerat, quam corporis enim doloribus recusandae illo eveniet laboriosam dignissimos eos at autem? Quidem, facere et? Excepturi deserunt cupiditate atque unde accusantium minus, dicta facere, optio quia tempora possimus quaerat veritatis asperiores eaque sit nostrum sapiente fuga minima fugiat blanditiis totam fugit at maxime. Suscipit excepturi nostrum maiores deleniti?
           </div>
           <br/>
           <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum placeat, voluptates excepturi laborum similique perspiciatis vel, minima nihil veritatis illum necessitatibus aliquam labore distinctio. Cum consequuntur perferendis obcaecati accusamus ipsum dolore necessitatibus ullam, iure fugit voluptates nemo ab alias nostrum beatae non vel explicabo eos maxime laudantium aliquam ducimus! Nemo quaerat, quam corporis enim doloribus recusandae illo eveniet laboriosam dignissimos eos at autem? Quidem, facere et? Excepturi deserunt cupiditate atque unde accusantium minus, dicta facere, optio quia tempora possimus quaerat veritatis asperiores eaque sit nostrum sapiente fuga minima fugiat blanditiis totam fugit at maxime. Suscipit excepturi nostrum maiores deleniti?
           </div>
           <br/>
           <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum placeat, voluptates excepturi laborum similique perspiciatis vel, minima nihil veritatis illum necessitatibus aliquam labore distinctio. Cum consequuntur perferendis obcaecati accusamus ipsum dolore necessitatibus ullam, iure fugit voluptates nemo ab alias nostrum beatae non vel explicabo eos maxime laudantium aliquam ducimus! Nemo quaerat, quam corporis enim doloribus recusandae illo eveniet laboriosam dignissimos eos at autem? Quidem, facere et? Excepturi deserunt cupiditate atque unde accusantium minus, dicta facere, optio quia tempora possimus quaerat veritatis asperiores eaque sit nostrum sapiente fuga minima fugiat blanditiis totam fugit at maxime. Suscipit excepturi nostrum maiores deleniti?
           </div>
           <br/>
           <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum placeat, voluptates excepturi laborum similique perspiciatis vel, minima nihil veritatis illum necessitatibus aliquam labore distinctio. Cum consequuntur perferendis obcaecati accusamus ipsum dolore necessitatibus ullam, iure fugit voluptates nemo ab alias nostrum beatae non vel explicabo eos maxime laudantium aliquam ducimus! Nemo quaerat, quam corporis enim doloribus recusandae illo eveniet laboriosam dignissimos eos at autem? Quidem, facere et? Excepturi deserunt cupiditate atque unde accusantium minus, dicta facere, optio quia tempora possimus quaerat veritatis asperiores eaque sit nostrum sapiente fuga minima fugiat blanditiis totam fugit at maxime. Suscipit excepturi nostrum maiores deleniti?
           </div>
           <br/>
           <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum placeat, voluptates excepturi laborum similique perspiciatis vel, minima nihil veritatis illum necessitatibus aliquam labore distinctio. Cum consequuntur perferendis obcaecati accusamus ipsum dolore necessitatibus ullam, iure fugit voluptates nemo ab alias nostrum beatae non vel explicabo eos maxime laudantium aliquam ducimus! Nemo quaerat, quam corporis enim doloribus recusandae illo eveniet laboriosam dignissimos eos at autem? Quidem, facere et? Excepturi deserunt cupiditate atque unde accusantium minus, dicta facere, optio quia tempora possimus quaerat veritatis asperiores eaque sit nostrum sapiente fuga minima fugiat blanditiis totam fugit at maxime. Suscipit excepturi nostrum maiores deleniti?
           </div>
           <br/>
        </div>
    );
};

export default SharePage;