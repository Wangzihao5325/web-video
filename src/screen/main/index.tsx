import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../store/actions/index';
import { TEST1 } from '../../test/test';

interface MainProps {
    isShow: boolean
}

const Main: React.SFC<MainProps> = (props) => {

    function divClick() {
        console.log(TEST1);
        Actions.test.letUsTest();
    }

    return (
        <div>
            <div onClick={divClick}>main screen</div>
            {props.isShow && <div>show</div>}
        </div>
    );
}

function mapState2Props(store: any) {
    return {
        isShow: store.test.isShow
    }
}

const MainWithStore = connect(mapState2Props)(Main);

export default MainWithStore;