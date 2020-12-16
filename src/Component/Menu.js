import React from 'react';

const Menu = ({ menu }) => {
  const menuList = menu.map(item => {
    return (
      <section>
        <p>{item.name}</p>
        <p>${item.price}</p>
      </section>
    )
  })

  return (
    <section style={{ display: 'flex', color: '#fff' }}>
      {menuList}
    </section>
  )
}

export default Menu