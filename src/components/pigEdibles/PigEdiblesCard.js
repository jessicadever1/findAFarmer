import React from "react"
import "./PigEdibles.css"

export const PigEdiblesCard = () => {

    return (
        <>
                        <div className="checklistDiv">
                            <fieldset className="checkListFieldset">
                                <label htmlFor="avocadoPit" className="onions">Avocado Pits & Rinds</label>
                                <input type="checkbox" name="avocadoPit" id="avocadoPit" className="avocadoPitLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="cannedBeans" className="cannedBeans">Canned Beans</label>
                                <input type="checkbox" name="cannedBeans" id="cannedBeans" className="cannedBeansLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="cherries" className="cherries">Cherries</label>
                                <input type="checkbox" name="cherries" id="cherries" className="cherriesLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="chocolate" className="chocolate">Chocolate</label>
                                <input type="checkbox" name="chocolate" id="chocolate" className="chocolateLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="coffeeGrounds" className="coffeeGrounds">Coffee Grounds</label>
                                <input type="checkbox" name="coffeeGrounds" id="coffeeGrounds" className="coffeeGroundsLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="rawEggs" className="rawEggs">Eggs, raw or uncooked</label>
                                <input type="checkbox" name="rawEggs" id="rawEggs" className="rawEggsLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="eggShells" className="eggShells">Egg Shells</label>
                                <input type="checkbox" name="eggShells" id="eggShells" className="eggShellsLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="fruitScraps" className="fruitScraps">Fruit Scraps*</label>
                                <input type="checkbox" name="fruitScraps" id="fruitScraps" className="fruitScrapsLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="grains" className="grains">Grains</label>
                                <input type="checkbox" name="grains" id="grains" className="grainsLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="humanRemains" className="humanRemains">Human Remains</label>
                                <input type="checkbox" name="humanRemains" id="humanRemains" className="humanRemainsLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="meat" className="meat">Meat</label>
                                <input type="checkbox" name="meat" id="meat" className="meatLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="nutsAndSeeds" className="nutsAndSeeds">Nuts & Seeds</label>
                                <input type="checkbox" name="nutsAndSeeds" id="nutsAndSeeds" className="nutsAndSeedsLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="onions" className="onions">Onions</label>
                                <input type="checkbox" name="onions" id="onions" className="onionLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="pittedProduce" className="pittedProduce">Pitted Fruits and Vegetables</label>
                                <input type="checkbox" name="pittedProduce" id="pittedProduce" className="pittedProduceLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="produceStickers" className="produceStickers">Produce Stickers</label>
                                <input type="checkbox" name="produceStickers" id="produceStickers" className="produceStickersLabel checkbox"  />
                            </fieldset>
                            <fieldset className="checkListFieldset">
                                <label htmlFor="vegScraps" className="vegScraps">Vegetable Scraps*</label>
                                <input type="checkbox" name="vegScraps" id="vegScraps" className="vegScrapsLabel checkbox"  />
                            </fieldset>
                        </div>    
        </>
    )
}