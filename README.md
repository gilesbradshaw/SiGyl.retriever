SiGyl.retriever
===============

retrieves, subscribes to and unsubscribes from data 


	{{#with:get()}}
		{{#with:got()}}
			{{#with:Application().get()}}
				{{#with:got()}}
					<h1>{{Id}} {{Name}}</h1>
				{{/with}}
			{{/with}}
			
			{{#with:Sites()}}
				<ul>
				{{#with:selectMany("Zones")}}
					{{#with:got()}}
						{{#with:selectMany("Units")}}
							{{#with:got()}}
								{{#with:where("Name", "startsWith","d").get()}}
									{{#foreach:got()}}
										<li>{{Name}}</li>
									{{/foreach}}
								{{/with}}
							{{/with}}
						{{/with}}
					{{/with}}
				{{/with}}
				</ul>
			{{/with}}
			<h1>{{Name}}</h1>
			{{#with:Sites()}}
				<ul>
					{{#with:orderBy("Name").skip(0).take(40).get()}}
						{{#foreach:got()}}
						<li>
							{{Name}}
							{{#with:Enterprise().get()}}
								{{#with:got()}}
									-{{Name}}
								{{/with}}
							{{/with}}
						</li>
						{{/foreach}}
					{{/with}}
				</ul>
			{{/with}}
		{{/with}}
	{{/with}}
