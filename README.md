## Sun Chaser

![Sun Chaser Dashboard](public/screenshot.png)

Sun Chaser is a web dashboard created during the [MagnoliaConf Hackathon](https://magnoliaconf.com/), where it **won 3rd place!** 🥉🥰 Built with React, Vite, and KendoReact, it's the first working version of a larger art-tech project: a van outfitted with a solar-powered webserver and GPS adventure logging.

## 🙏 Acknowledgments

Thanks to [MagnoliaConf](https://2025.magnoliaconf.com/) and [Progress](https://www.progress.com/) for giving me an excuse to make another one of my @TODO side projects possible!

Core Features
- Interactive map showing the van's route and general location (well there is a map)
- Live stats on solar output, uptime, and travel metrics (no)
- Build details and technical notes on the van and server setup (nah)
- Photo gallery and travel log from the road (nope)
- Dynamic data grid and charts powered by KendoReact (yep, mostly)
- Sensor readings streamed from the onboard system (nope)
- Customizable dashboard views and UI experiments (eh)
- Reflections on digital nomadism and creative tech (nah)

## 🛠️ Kendo React Components Used

### Layout Components (3)
- `Card` - Main container components
- `StackLayout` - Responsive layout system
- `AppBar` & `AppBarSection` - Navigation header

### Chart Components (9)
- `Chart` - Main chart container
- `ChartSeries` - Chart data series
- `ChartSeriesItem` - Individual chart lines/bars
- `ChartCategoryAxis` - X-axis configuration
- `ChartCategoryAxisItem` - X-axis categories
- `ChartValueAxis` - Y-axis configuration
- `ChartValueAxisItem` - Y-axis values
- `ChartTitle` - Chart titles
- `ChartLegend` - Chart legends

### Input Components (3)
- `TextBox` - Form input fields
- `TextArea` - Multi-line text inputs
- `Label` - Form labels

### Button Components (1)
- `Button` - Interactive buttons

### Progress Components (1)
- `ProgressBar` - Solar efficiency visualization

### Form Components (5)
- `Form` - Form container
- `Field` - Form field wrapper
- `FormElement` - Form structure
- `FormRenderProps` - Form state management
- `FieldWrapper` - Field styling wrapper

**Total: 22 unique Kendo React components** across 8 different packages
