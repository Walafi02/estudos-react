import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#" label="Bashboard" icon="dashboard" />
        <MenuTree label="Cadastro" icon="edit" >
            <MenuItem path="#billingCycles" 
                label="Ciclos de pagamentos" icon="usd" />
        </MenuTree>
    </ul>
)