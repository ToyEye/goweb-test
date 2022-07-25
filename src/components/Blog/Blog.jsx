import React from 'react';
import { TextContainer } from 'components/reusableComponents/TextContainer/TextContainer.styled';
import { Text } from 'components/reusableComponents';
import blogWebOne from 'images/home/blog.webp';
import blogWebSecond from 'images/home/blog@2x.webp';
import blogJpgOne from 'images/home/blog.jpg';
import blogJpgSecond from 'images/home/blog@2x.jpg';
import { BlogContainer, PictureContainer } from './Blog.styled';

const title = 'April 16 2020';
const solutions = 'Blog Post One';
const about =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?';

const Blog = () => {
  return (
    <TextContainer id="blog">
      <BlogContainer>
        <PictureContainer>
          <picture>
            <source
              srcSet={`${blogWebOne} 1x, ${blogWebSecond} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${blogJpgOne} 1x, ${blogJpgSecond} 2x,`}
              type="image/jpeg"
            />
            <img src={blogJpgOne} alt="about" />
          </picture>
        </PictureContainer>
        <Text
          title={title}
          solutions={solutions}
          about={about}
          btnText="Read Our Blog"
          blog
        />
      </BlogContainer>
    </TextContainer>
  );
};

export default Blog;
