import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Deshboard extends Component {


    render() {
        return (
            <div>
                <ContentHeader title='Deshboard' small='Versão 1.0' />
                <Content>
                    Deshboard
                </Content>
            </div>
        )
    }
}

export default Deshboard