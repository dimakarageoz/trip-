var	my_news	=	[
		{
				author:	'Саша	Печкин',
				text:	'В	четверг,	четвертого	числа...'
		},
		{
				author:	'Просто	Вася',
				text:	'Считаю,	что	$	должен	стоить	35	рублей!'
		},
		{
				author:	'Гость',
				text:	'Бесплатно.	Скачать.	Лучший	сайт	-	http://localhost:2000'
		}
];

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
// });
var	News	=	React.createClass({
		render:	function()	{
				var	data	=	this.props.data;
				var	newsTemplate	=	data.map(function(item,	index)	{
						return	(
								<div	key={index}>
										<p	className="news__author">{item.author}:</p>
										<p	className="news__text">{item.text}</p>
								</div>
						)
				})
        console.log(newsTemplate);
				return	(
						<div	className="news">
								{newsTemplate}
						</div>
				);
		}
});

var Comments=React.createClass({
	render: ()=>{
		return(
		<div className="comments">
		No new - no comments
		</div>
	);
	}
});
				var App=React.createClass({
					render: ()=>{
						return(
							<div className="app">
						    	Hello. I can show news!
									<News data={my_news} />
									<Comments />
							</div>
						); }
				});

				ReactDOM.render(
				 <App />,
				 document.getElementById('root')
				);
