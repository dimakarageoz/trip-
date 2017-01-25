
var	my_name	=	['Your friends','Message','Groups','Trip','Foto','Option'];

// this.props.data.map((item, index)=>{
//   return(
//     <div key={index}>
//         <p	className="news__author">{item.author}:</p>
//     		<p	className="news__text">{item.text}</p>
//     </div>
//   )
// })

// var News=React.createClass({
// 	render:()=>{
// 		return(
// 			<div className="news">
// 			No News
// 			</div>
// 		);
// 	}
// // });
// var Author =React.createClass({
// 	render:()=>{
// 		var data= this.props.data;
//
// 		var goodAuthor =data.map((item, index)=>{
// 			return(
// 				<div key={index}>
// 						<a href="#">{item}</a>
// 				</div>
// 			)
// 		})
// 		return(
// 			<div	className="nickname">
// 					{goodAuthor}
// 			</div>
// 		);
// 	}
// });
var	Button	=	React.createClass({
		handleOnClick: (e) => {
		location.href = "https://www.google.com.ua/";
		},
		render:	function()	{
				var	data	=	this.props.data;
				var handleOnClick = this.handleOnClick;

				var	newsTemplate	=	data.map(function(item,	index)	{
					if(item ==='Foto')
					{
						return(
						<div	key={index}>
								<a	href="@" className="news__button">{item}</a>
						</div>)
					}
					else if(item ==='Message')
					{
						return(
						<div	key={index}>
								<a	href="$" className="news__button">{item}</a>
						</div>)
					}
					else {
						return(
								<div	key={index}>
										<button	className="news__button" onClick={handleOnClick}>{item}</button>
									</div>)
					}
				})
				return	(
						<div	className="btg">
								{newsTemplate}
						</div>
				);
		}
});

var my_nick = ['Pulli'];
var	Author	=	React.createClass({
		render:	function()	{
				var	data	=	this.props.data;
				var	newsTemplate	=	data.map(function(item,	index)	{
					if(item==='Exit')
				{return	(
						<div	key={index}>
								<a	href="#!#" className="news__button" >{item}:</a>
						</div>
				)} else
						{return	(
								<div	key={index}>
										<a	href="#" className="news__button" >{item}:</a>
								</div>
						)}
				})
				return	(
						<div	className=".list-group-item.dropdown-toggle">
								{newsTemplate}
						</div>
				);
		}
});
////////////////
// var MySelect = React.createClass({
//      getInitialState: function() {
//          return {
//              value: 'select'
//          }
//      },
//      change: function(event){
//          this.setState({value: event.target.value});
//      },
//      render: function(){
//         return(
//            <div>
//                <select id="lang" onChange={this.change} value={this.state.value}>
//                   <option value="select">Select</option>
//                   <option value="Java">Java</option>
//                   <option value="C++">C++</option>
//                </select>
//            </div>
//         );
//      }
// });
// // //////////////////////
// var Select = React.createClass({
//   getInitialState: function () {
//     return {
//       value: '?',
//       options: [
//         { value: null, name: 'Select…' },
//         { value: 'a', name: 'A' },
//         { value: 'b', name: 'B' },
//         { value: 'c', name: 'C' }
//       ]
//     };
//   },
//   handleChange: function (e) {
//     this.setState({value: e.target.value});
//   },
//   render: function () {
//     var createItem = function (item, key) {
//       return <option key={key} value={item.value}>{item.name}</option>;
//     };
//     return (
//       <div>
//         <select onChange={this.handleChange} value={this.state.value} onClick='location.href="https://www.google.com.ua/"'>
//           {this.state.options.map(createItem)}
//         </select>
//         <a herf="#">Favorite letter: {this.state.value}</a>
//       </div>
//     );
//   }
// });
// ///////////////////////
var Bar=React.createClass({
	render: ()=>{
		return(
			<div className="navmenu navmenu-default navmenu-fixed-left offcanvas in canvas-slid">
          <Author data={my_nick} />
					<Button data={my_name} />
					<Author data={['Exit']} />
			</div>
		); }
});

ReactDOM.render(
 <Bar />,
 document.getElementById('root')
);
