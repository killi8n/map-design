import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Button from '../Button'
import Text from '../Text'
import { NewsSectionMoreButtonProps } from './types';

const NewsSectionMoreButton: FC<NewsSectionMoreButtonProps> = ({ onPress, isBottom }) => {
    return (
        <Button
            rounded
            onPress={onPress}
            customStyles={isBottom && styles.bottomStyle}
        >
            <Text
                customStyles={styles.textCustomStyles}
            >
                더보기
            </Text>
        </Button>
    );
};

const styles = StyleSheet.create({
    textCustomStyles: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600'
    },
    bottomStyle: {
        width: "100%",
        paddingTop: 7.5,
        paddingBottom: 7.5
    }
})

export default NewsSectionMoreButton;