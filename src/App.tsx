import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/button/button'

const App: React.FC = () => {
  return (
    <div className="App">

      <Button>Common Button</Button>

      <Button onClick={(e) => {e.preventDefault(); console.log(e)}} btnType={ButtonType.Danger} size={ButtonSize.Large}>Danger Button</Button>
      <Button btnType={ButtonType.Primary} >Danger Button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Danger Button</Button>
      <Button disabled={true} size={ButtonSize.Small}>Disabled</Button>
      <Button btnType={ButtonType.Link} href={'https://znp.ink'} target={'_blank'}>Link Button</Button>
      <Button btnType={ButtonType.Link} disabled={true} href={'https://znp.ink'}>Link Button</Button>
    </div>
  );
}

export default App;
