import React from "react"
import { shallow } from "enzyme"
import DashboardPage from "../../components/DashboardPage"


// Render Expense Dashboard Page Component
test("Should render Dashboard Page correctly", () => {
    const wrapper = shallow(<DashboardPage />)

    expect(wrapper).toMatchSnapshot()
})
