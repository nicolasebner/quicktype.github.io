class ResultComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get correctKeys() {
    return this.getAttribute("correct-keys");
  }
  get wrongKeys() {
    return this.getAttribute("wrong-keys");
  }
  get correctWords() {
    return this.getAttribute("correct-words");
  }
  get wrongWords() {
    return this.getAttribute("wrong-words");
  }

  static get observedAttributes() {
    return ["correct-keys", "wrong-keys", "correct-words", "wrong-words"];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    <style>
    .auswertung-result {
        padding: 0px;
        width: 280px;
        float: left;
        margin-right: 20px;
        margin-bottom: 20px;
        background: #fff;
        border-radius: 3px;
        position: relative;
        box-sizing: border-box;
        color: #dbe2ef;
    }

    .header h3 {
        color: #fff;
        background-color: #903749;
        font-size: 16px;
        padding: 8px 15px;
        margin: 0px;
        font-weight: bold;
        text-shadow: 1px 1px 1px #333333;
        border-radius: 3px 3px 0px 0px;
        box-sizing: border-box;
        display: block;
    }

    .table {
        width: 100%;
        max-width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        box-sizing: border-box;
        display: table;
        line-height: 1.5;
        border-color: #903749;
        background-color: #2b2e4a;
    }

    tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    td {
        padding: 8px;
        border-top: 1px solid #903749;
        display: table-cell;
    }

    .table-heading {
        text-align: center;
        font-size: 30px;
        color: #00adb5;
        font-weight: bold;
    }

    .name {
        font-size: 16px;
        /* padding-left: 20px; */
        width: 160px;
    }

    .value {
        font-size: 16px;
        text-align: right;
        padding-right: 20px;
    }

    .value span {
        margin: 0px;
        padding: 0px;
    }

    .correct {
        color: green;
    }

    .wrong {
        color: #e84545;
    }
</style>

<div class="auswertung-result">
    <div class="header">
        <h3>Ergebnis</h3>
    </div>
    <div class="content">

        <table class="table">
            <tbody>
                <tr>
                    <td colspan="2" class="table-heading"><strong>${
                      Number(this.correctKeys) / 5
                    } WPM</strong></td>
                </tr>
                <tr>
                    <td class="name">Tastenanschläge</td>
                    <td class="value">

                        <small>
                            (<span class="correct">${
                              this.correctKeys
                            }</span> | <span class="wrong">${
      this.wrongKeys
    }</span>)
                        </small> ${
                          Number(this.correctKeys) + Number(this.wrongKeys)
                        }
                    </td>
                </tr>
                <tr>
                    <td class="name">Korrekte Wörter</td>
                    <td class="value correct">${this.correctWords}</td>
                </tr>
                <tr>
                    <td class="name">Falsche Wörter</td>
                    <td class="value wrong">${this.wrongWords}</td>
                </tr>
            </tbody>
        </table>


    </div>
        `;
  }
}

customElements.define("result-component", ResultComponent);
