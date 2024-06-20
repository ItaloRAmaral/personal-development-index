package entity

type Investor struct {
	ID            string
	Name          string
	AssetPosition []*InvestorAssetPossition
}

type InvestorAssetPossition struct {
	AssetID string
	Shares  int
}

func NewInvestor(id string) *Investor {
	return &Investor{
		ID:            id,
		AssetPosition: []*InvestorAssetPossition{},
	}
}

func (i *Investor) AddAssetPosition(assetPosition *InvestorAssetPossition) {
	i.AssetPosition = append(i.AssetPosition, assetPosition)
}

func (i *Investor) UpdateAssetPosition(assetID string, qtdShares int) {
	assetPosition := i.GetAssetPosition(assetID)

	if assetPosition == nil {
		i.AssetPosition = append(i.AssetPosition, NewInvestorAssetPosition(assetID, qtdShares))
	} else {
		assetPosition.Shares += qtdShares
	}
}

func (i *Investor) GetAssetPosition(assetID string) *InvestorAssetPossition {
	for _, assetPosition := range i.AssetPosition {
		if assetPosition.AssetID == assetID {
			return assetPosition
		}
	}

	return nil
}

func NewInvestorAssetPosition(assetID string, shares int) *InvestorAssetPossition {
	return &InvestorAssetPossition{
		AssetID: assetID,
		Shares:  shares,
	}
}
