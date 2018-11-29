class Top{
	constructor()
		{
		if(localStorage.getItem('Local'))
		{
			this.lugar = JSON.parse(localStorage.getItem('Local'));
		}		
		else
		{
			this.lugar = [];
		} 
	}
	inserir(tudo)
	{
		this.lugar.push(tudo);
		localStorage.setItem("Local",JSON.stringify(this.lugar));
	}
	buscar(nome)
	{
		for(var i=0;i<this.lugar.length;i++)
		{
			if(this.lugar[i].nome_loc == nome)
			{
				return this.lugar[i];
			}
		}
		return false;
	}
}

/*Todo isso serve para a construção, inserção, listagem e busca das informaçoes do local*/