import React from 'react'
import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import styles from './news.module.css';
const NewsCard = ({ }) => {
    const {news} = useSelector((state) => state.news);
    return(
        <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' className={styles.news_container}>
            {news.map((item) => (
                console.log(item , "satra"),
                <Card className={styles.news_card} key={item.title}>
                    <CardHeader>
                    <Heading size='md'> {item?.title}</Heading>
                    <Text>{item?.author}</Text>
                    <Text>{item?.publishedAt.split('T')[0]}</Text>
                    </CardHeader>
                    <CardBody>
                    <Text>{item.description}</Text>
                    </CardBody>
                </Card>
            ))}         
        </SimpleGrid>
    )

}

export default NewsCard