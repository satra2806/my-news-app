import React from 'react'
import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import styles from './news.module.css';
const NewsCard = ({ }) => {
    const {news , preferredSource} = useSelector((state) => state.news);
    return(
        <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' className={styles.news_container}>
            {news.map((item) => (
                <Card className={styles.news_card} key={item?.title || item?.webTitle}>
                    <CardHeader>
                    <Heading size='md'> {preferredSource.value === 'NewsAPI' ? item?.title : item?.webTitle}</Heading>
                    <Text>{item?.author}</Text>
                    <Text>{ preferredSource.value === 'NewsAPI' ? item?.publishedAt?.split('T')[0] : item?.webPublicationDate?.split('T')[0] }</Text>
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