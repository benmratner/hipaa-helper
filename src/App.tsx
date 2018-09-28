import * as React from 'react';
import './App.css';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import documents from './documents'
import logo from './hippo-logo.png'

const pdf = pdfMake;
pdf.vfs = pdfFonts.pdfMake.vfs;


class App extends React.Component {

  state = {
    practiceName: '',
    iframeSrc: '',
  }

  openPdf = () => {
    const docDefinition = documents.securityManagementPolicy(this.state.practiceName, 'September 29, 2018');
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    (pdfDocGenerator as any).getDataUrl((dataUrl: string) => {
      this.setState({iframeSrc: dataUrl});
    });
    // pdf.createPdf(docDefinition).download();
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HIPAA Helper</h1>
        </header>
        Practice Name: <input onChange={e => this.setState({practiceName: e.target.value})} value={this.state.practiceName} />
        <button onClick={this.openPdf}>Open PDF</button>
        {this.state.iframeSrc &&
          <div id='iframeContainer'>
            <iframe src={this.state.iframeSrc} className='pdf-preview'/>
          </div>
        }
      </div>
    );
  }
}

export default App;
